import MetaMaskOnboarding from "@metamask/onboarding";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { Alert, Button, Modal, Placeholder } from "react-bootstrap";
import { Contract } from "../../constants/contract";
import { WalletContext } from "../../providers/WalletProvider";
import Image from "../Image";
import style from "./metamask.module.scss";

const ONBOARD_TEXT = "Instalar wallet MetaMask!";
const CONNECT_TEXT = "Conectar Wallet";
const NOT_ADDED_TO_METAMASK_ERROR = 4902;

const MetamaskConnection = ({displayFullAddress, displayWithLink, normalButtonSize}) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const { userWallet, setUserWallet } = useContext(WalletContext);
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [installMetamaskModal, setInstallMetamaskModal] = useState(false);
  const onboarding = useRef();

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

  const switchToContractChain = async () => {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: Contract.chainId }],
      });
    } catch (switchError) {
      if (switchError.code === NOT_ADDED_TO_METAMASK_ERROR) {
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: Contract.chainId,
              chainName: Contract.chainName,
              nativeCurrency: Contract.currency,
              rpcUrls: Contract.rpcUrls,
            },
          ],
        });
      }
    }
  };

  const handleNewAccounts = (newAccounts) => {
    setUserWallet(newAccounts[0] ?? "");
    setInitialized(true);
  };

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      onboarding.current.initialized = initialized;
    }
  }, [initialized]);

  useEffect(async () => {
    const handleChainChanged = (_chainId) => {
      window.location.reload();
    };

    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setMetamaskInstalled(true);

      if (await window.ethereum._metamask.isUnlocked()) {
        await switchToContractChain();

        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then(handleNewAccounts);
        window.ethereum.on("accountsChanged", handleNewAccounts);
        window.ethereum.on("chainChanged", handleChainChanged);

        return () => {
          window.ethereum.removeListener("accountsChanged", handleNewAccounts);
          window.ethereum.removeListener("chainChanged", handleChainChanged);
        };
      } else {
        setInitialized(true);
      }
    } else {
      setInitialized(true);
    }
  }, []);

  useEffect(async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setMetamaskInstalled(true);
      if (userWallet !== "") {
        await switchToContractChain();
        setButtonText(accountDisplay(userWallet));
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
      }
    }
  }, [userWallet]);

  const onClick = async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setMetamaskInstalled(true);
      if (userWallet === "") {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then(handleNewAccounts)
          .catch(() => window.location.reload());
      }
    } else {
      // redirect to new page to explain how to create Metamask
      if (router.pathname != "/nft") {
        router.push("/nft");
      } else {
        onboarding.current.startOnboarding();
      }
    }
  };

  const onClickMobile = () => {
    setInstallMetamaskModal(true);
  };

  let buttonType = "";
  if (!normalButtonSize) {
    if (displayFullAddress) {
      buttonType = style.longDisplay;
    } else {
      buttonType = style.shortDisplay;
    }
  }

  return (
    <>
      <button
        disabled={!initialized || (userWallet !== "" && !displayWithLink)}
        onClick={onClick}
        className={
          style.metamaskButton +
          " " +
          buttonType +
          (metamaskInstalled ? "" : " d-none d-md-inline")
        }
      >
        <Image src="/images/metamask.png" className={style.metamaskImage} />
        <span>{initialized ? buttonText : <Placeholder xs={6} />}</span>
      </button>

      {!metamaskInstalled && (
        <>
          <button
            onClick={onClickMobile}
            className={style.metamaskButton + " " + buttonType + " d-md-none"}
          >
            <Image src="/images/metamask.png" className={style.metamaskImage} />
            <span>{CONNECT_TEXT}</span>
          </button>
          <Modal
            show={installMetamaskModal}
            onHide={() => setInstallMetamaskModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Instalar extensión Metamask</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Alert variant="danger">
                <p>
                  Por favor, instala la extensión Metamask para poder comprar
                  uno de nuestros NFTs.
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
                onClick={() => setInstallMetamaskModal(false)}
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

export default MetamaskConnection;
