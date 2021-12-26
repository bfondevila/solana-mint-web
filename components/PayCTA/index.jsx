import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Container,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Contract } from "../../constants/contract";
import { PAYPAL_CLIENT_ID, PRICE_PER_NFT } from "../../constants/payment";
import {
  getMintData,
  getPricePerNFT,
  getPricePerNFTInWei,
} from "../../shared/lib/Crypto";
import NumberFormat from "../../shared/lib/NumberFormat";
import MetamaskConnection from "../MetamaskConnection";
import Link from "next/link";
import style from "./pay_cta.module.scss";

const PayCTA = () => {
  const [show, setShow] = useState(false);
  const orderDetails = useRef({ amount: 0, userWallet: null });
  const [NFTAmount, setNFTAmount] = useState(0);
  const [userWallet, setUserWallet] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [platform, setPlatform] = useState();
  const [errorState, setErrorState] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [maticPerNFTInWei, setMaticPerNFTInWei] = useState(0);
  const [maticPerNFT, setMaticPerNFT] = useState(0);
  const [transactionHash, setTransactionHash] = useState();
  const [mintInProgress, setMintInProgress] = useState(false);

  const formatter = NumberFormat();

  const handleClose = () => setShow(false);

  const handleAmountNFTChange = (amount) => {
    setNFTAmount(amount);
    orderDetails.current.amount = amount;
  };

  const handleAccountsChanged = (account) => {
    setUserWallet(account);
    orderDetails.current.userWallet = account;
  };

  const paypalClicked = () => {
    setErrorState(false);
    setOrderSuccess(false);
    setPlatform("paypal");
    setModalTitle("Paga con Paypal");
    setShow(true);
  };

  const maticClicked = () => {
    setErrorState(false);
    setOrderSuccess(false);
    setPlatform("matic");
    setModalTitle("Paga con MATIC (crypto)");
    setShow(true);
  };

  const calculateTotal = (amount) => {
    if (platform == "paypal") {
      return formatter.euros(amount * PRICE_PER_NFT);
    } else if (platform == "matic") {
      return formatter.matic(amount * maticPerNFT);
    }

    return "";
  };

  const mint = async (data) => {
    setErrorState(false);
    setOrderSuccess(false);

    const amount = data.orderDetails.current.amount;
    const userWallet = data.orderDetails.current.userWallet;
    if (userWallet == "") {
      setErrorState("Debes conectar tu wallet primero.");
      return;
    }

    setMintInProgress(true);

    const transactionParameters = {
      to: Contract.address,
      from: ethereum.selectedAddress,
      data: getMintData(userWallet, amount),
      value: "0x" + (+maticPerNFTInWei * amount).toString(16),
    };

    // As with any RPC call, it may throw an error
    try {
      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      setTransactionHash(txHash);
      setErrorState(false);
      setOrderSuccess(true);
    } catch (error) {
      setErrorState("No se pudo procesar el pago");
      console.log(error);
    }

    setMintInProgress(false);
  };

  useEffect(async () => {
    setMaticPerNFT(await getPricePerNFT());
    setMaticPerNFTInWei(await getPricePerNFTInWei());
  }, []);

  const createOrder = (data, actions) => {
    setErrorState(false);
    setOrderSuccess(false);

    const amount = data.orderDetails.current.amount;
    const userWallet = data.orderDetails.current.userWallet;

    if (amount > 0 && userWallet !== "") {
      const order = {
        purchase_units: [
          {
            items: [
              {
                name: "Estrella Sobre Un Volcán Dormido NFT",
                unit_amount: {
                  currency_code: "EUR",
                  value: PRICE_PER_NFT,
                },
                quantity: amount,
                category: "DIGITAL_GOODS",
              },
            ],
            amount: {
              currency_code: "EUR",
              value: amount * PRICE_PER_NFT,
              breakdown: {
                item_total: {
                  currency_code: "EUR",
                  value: amount * PRICE_PER_NFT,
                },
              },
            },
            soft_descriptor: "NFT Palma",
            custom_id: userWallet,
            description:
              "NFTs para el apoyo a La Palma, " +
              amount +
              " unidades para la cuenta " +
              userWallet +
              " (Polygon)",
          },
        ],
      };

      return actions.order.create(order);
    }
  };

  const onApprove = (_data, actions) => {
    return actions.order
      .capture()
      .then(() => {
        setErrorState(false);
        setOrderSuccess(true);
      })
      .catch((reason) => {
        setErrorState("No se ha podido realizar el pago. Error: " + reason);
        console.log("Unable to process payment. Reason: " + reason);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Alert variant="danger" hidden={!errorState}>
            {errorState}
          </Alert>
          <Alert variant="success" hidden={!orderSuccess}>
            <p>Gracias, tu pedido se ha procesado correctamente.</p>
            <p>
              En unos minutos podrás ver los NFTs adquiridos en{" "}
              <Link href="/mi-cuenta">tu cuenta</Link>.
            </p>
            <p hidden={!transactionHash}>
              El pedido se ha registrado en la transacción{" "}
              <a
                href={Contract.blockExplorerUrls[0] + "/tx/" + transactionHash}
                target="_blank"
              >
                {transactionHash}
              </a>{" "}
              en Polygon (MATIC).
            </p>
          </Alert>
          Enviar a:{" "}
          <MetamaskConnection
            onAccountsChanged={handleAccountsChanged}
            displayFullAddress
            displayWithLink
          />
          <span className={style.required} hidden={userWallet != null}>
            * Requerido
          </span>
          <p>¿Cuántas unidades deseas comprar?</p>
          <ToggleButtonGroup
            type="radio"
            name="NFTAmount"
            className={style.nftAmountGroup}
            onChange={handleAmountNFTChange}
            defaultValue={NFTAmount}
          >
            {[1, 2, 5, 10, 50, 100].map((amount, index) => {
              return (
                <ToggleButton
                  key={index}
                  id={"radio-" + index}
                  type="radio"
                  variant="dark"
                  value={amount}
                >
                  {amount}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>{" "}
          <span className={style.required} hidden={NFTAmount !== 0}>
            * Requerido
          </span>
          <Container>
            <p>Total: {calculateTotal(NFTAmount)}</p>
          </Container>
          {platform === "paypal" && (
            <>
              <PayPalScriptProvider
                options={{
                  "client-id": PAYPAL_CLIENT_ID,
                  currency: "EUR",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) =>
                    createOrder(
                      { ...data, ...{ orderDetails: orderDetails } },
                      actions,
                    )
                  }
                  onApprove={(data, actions) => onApprove(data, actions)}
                  disabled={!userWallet || !NFTAmount}
                />
              </PayPalScriptProvider>
            </>
          )}
          {platform === "matic" && (
            <>
              <Button
                onClick={() => mint({ orderDetails: orderDetails })}
                variant="success"
                disabled={!userWallet || !NFTAmount || mintInProgress}
              >
                Mintear NFTs
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
      <div className={"text-center " + style.btn_container}>
        <Button onClick={paypalClicked}>PAGAR CON PAYPAL</Button>
        <Button onClick={maticClicked}>PAGAR CON MATIC</Button>
      </div>
    </>
  );
};

export default PayCTA;
