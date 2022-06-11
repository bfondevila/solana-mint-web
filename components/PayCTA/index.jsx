import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
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
import { WalletContext } from "../../providers/WalletProvider";
import {
  calculatePricePerNFT,
  getMintData,
  getPublicInfo,
} from "../../shared/lib/Crypto";
import NumberFormat from "../../shared/lib/NumberFormat";
import Web3Connection from "../Web3Connection";
import style from "./pay_cta.module.scss";

const defaultNFTAmount = 1;

const PayCTA = () => {
  const { userWallet } = useContext(WalletContext);
  const isConnected = () => {
    return userWallet !== "";
  };

  const [show, setShow] = useState(false);
  const orderDetails = useRef({ amount: defaultNFTAmount });
  const [NFTAmount, setNFTAmount] = useState(defaultNFTAmount);
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

  const paypalClicked = () => {
    setErrorState(false);
    setOrderSuccess(false);
    setPlatform("paypal");
    setModalTitle("COMPRAR CON PAYPAL");
    setShow(true);
  };

  const maticClicked = () => {
    setErrorState(false);
    setOrderSuccess(false);
    setPlatform("matic");
    setModalTitle("COMPRAR CON MATIC");
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
    if (userWallet === "") {
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

  useEffect(() => {
    getPublicInfo().then(({ nftPrice }) => {
      setMaticPerNFTInWei(nftPrice);
      setMaticPerNFT(calculatePricePerNFT(nftPrice));
    });
  }, []);

  const createOrder = (data, actions) => {
    setErrorState(false);
    setOrderSuccess(false);

    const amount = data.orderDetails.current.amount;

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
      <Modal show={show} onHide={handleClose} dialogClassName={style.modal}>
        <Modal.Header className={style.form_header} closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body className={style.form_container}>
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
              El pedido se ha registrado en la red Polygon (MATIC) en la
              siguiente transacción:{" "}
            </p>
            <p>
              <a
                href={Contract.blockExplorerUrls[0] + "/tx/" + transactionHash}
                target="_blank"
                className={style.transactionLink}
              >
                {transactionHash}
              </a>
            </p>
          </Alert>
          <div className={style.container}>
            <span className={style.form_field}>Enviar a: </span>
            <span>
              <Web3Connection displayFullAddress displayWithLink />
              <label className={style.required} hidden={isConnected()}>
                * Requerido
              </label>
            </span>
          </div>
          <div className={style.flex_container + " " + style.container}>
            <div className="col-6">
              <p className={style.form_field}>¿Cuántas unidades quieres?</p>
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
                      className={style.toggle_btn}
                    >
                      {amount}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>{" "}
              <span className={style.required} hidden={NFTAmount !== 0}>
                * Requerido
              </span>
            </div>
            <div
              className={
                "col-6 " +
                style.total_purchase_container +
                " " +
                style.text_right
              }
            >
              <strong className={style.form_field}>TOTAL:</strong>
              <p className={style.total_purchase_field}>
                {calculateTotal(NFTAmount)}
              </p>
            </div>
          </div>
          {platform === "paypal" && (
            <>
              <p className={style.form_field}>Elige el método de pago</p>
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
                  disabled={!isConnected() || !NFTAmount}
                />
              </PayPalScriptProvider>
            </>
          )}
          {platform === "matic" && (
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => mint({ orderDetails: orderDetails })}
                disabled={!isConnected() || !NFTAmount || mintInProgress}
                className={style.mint_btn}
              >
                Mintear NFTs
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Container
        className={
          style.paymentOptionsWrapper +
          "d-flex flex-column flex-md-row justify-content-center"
        }
      >
        <Button onClick={paypalClicked} className="mx-md-2 mb-2">
          PAGAR CON PAYPAL
        </Button>
        <Button onClick={maticClicked} className="mx-md-2 mb-2">
          PAGAR CON MATIC
        </Button>
      </Container>
    </>
  );
};

export default PayCTA;
