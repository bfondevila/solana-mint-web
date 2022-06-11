import { useContext, useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { Contract } from "../../constants/contract";
import { WalletContext } from "../../providers/WalletProvider";
import Image from "../Image";
import style from "./phantom.module.scss";
import { getProvider } from "./Provider";

const ONBOARD_TEXT = "Instalar Phantom wallet";
const CONNECT_TEXT = "Conectar Wallet";

const PhantomConnection = ({
  displayFullAddress,
  displayWithLink,
  normalButtonSize,
}) => {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const { userWallet, setUserWallet } = useContext(WalletContext);
  const [provider, setProvider] = useState(undefined);
  const [installProviderModal, setInstallProviderModal] = useState(false);

  const accountDisplay = (account) => {
    let result;
    if (displayFullAddress) {
      result = account;
    } else {
      result =
        account.substring(0, 6) +
        "..." +
        account.substring(account.length - 4, account.length - 1);
    }

    if (displayWithLink) {
      result = (
        <a
          target="_blank"
          href={Contract.blockExplorerUrls[0] + "/address/" + account}
        >
          {result}
        </a>
      );
    }

    return result;
  };

  const connectWallet = async () => {
    provider?.connect().catch(() => {});
  };

  useEffect(() => {
    const provider = getProvider();
    setProvider(provider);

    //Do nothing if there's an error and the user has not performed any actions
    provider?.connect({ onlyIfTrusted: true }).catch(() => {});
  }, []);

  const updateWalletDetails = (publicKey) => {
    setUserWallet(publicKey?.toBase58());
  };

  useEffect(() => {
    provider?.on("connect", updateWalletDetails);
    provider?.on("accountChanged", updateWalletDetails);

    return () => {
      provider?.removeListener("connect", updateWalletDetails);
      provider?.removeListener("accountChanged", updateWalletDetails);
    };
  });

  useEffect(() => {
    if (userWallet !== "") {
      setButtonText(accountDisplay(userWallet));
    } else {
      setButtonText(CONNECT_TEXT);
    }
  }, [userWallet]);

  const onClickMobile = () => {
    setInstallProviderModal(true);
  };

  let buttonType = "";
  if (!normalButtonSize) {
    if (displayFullAddress) {
      buttonType = style.longDisplay;
    } else {
      buttonType = style.shortDisplay;
    }
  }

  const buttonProps = {};
  if (!provider) {
    buttonProps.href = "https://phantom.app/";
    buttonProps.target = "_blank";
  }

  return (
    <>
      <Button
        disabled={userWallet !== "" && !displayWithLink}
        onClick={connectWallet}
        className={
          style.button +
          " " +
          buttonType +
          (provider ? "" : " d-none d-md-inline")
        }
        {...buttonProps}
      >
        <Image src="/images/phantom.png" className={style.image} />
        <span>{provider ? buttonText : ONBOARD_TEXT}</span>
      </Button>

      {(!provider || !provider.isPhantom) && (
        <>
          <button
            onClick={onClickMobile}
            className={style.button + " " + buttonType + " d-md-none"}
          >
            <Image src="/images/phantom.avif" className={style.image} />
            <span>{CONNECT_TEXT}</span>
          </button>
          <Modal
            show={installProviderModal}
            onHide={() => setInstallProviderModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Instalar extensión Phantom</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Alert variant="danger">
                <p>
                  Por favor, instala la extensión Phantom para poder comprar uno
                  de nuestros NFTs.
                </p>
                <p>
                  Si estás viendo la web en móvil, te recomendamos mejor usar
                  los navegadores Firefox o Chrome en tu PC.
                </p>
              </Alert>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => setInstallProviderModal(false)}
              >
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default PhantomConnection;
