import MetaMaskOnboarding from "@metamask/onboarding";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Placeholder } from "react-bootstrap";
import { Contract } from "../../constants/contract";
import { WalletContext } from "../../providers/WalletProvider";
import style from "./metamask.module.scss";

const ONBOARD_TEXT = "Instalar wallet MetaMask!";
const CONNECT_TEXT = "Conectar Wallet";
const NOT_ADDED_TO_METAMASK_ERROR = 4902;

const MetamaskConnection = (props) => {
  const [initialized, setInitialized] = useState(false);
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const { userWallet, setUserWallet } = useContext(WalletContext);
  const onboarding = useRef();

  const accountDisplay = (account) => {
    let result;
    if (props.displayFullAddress) {
      result = account;
    } else {
      result =
        account.substring(0, 6) +
        "..." +
        account.substring(account.length - 4, account.length - 1);
    }

    if (props.displayWithLink) {
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

  useEffect(async () => {
    const handleChainChanged = (_chainId) => {
      window.location.reload();
    };

    if (
      MetaMaskOnboarding.isMetaMaskInstalled() &&
      (await window.ethereum._metamask.isUnlocked())
    ) {
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
  }, []);

  useEffect(async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
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
      if (userWallet === "") {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((newAccounts) => handleNewAccounts(newAccounts))
          .catch(() => window.location.reload());
      }
    } else {
      // redirect to new page to explain how to create Metamask
      if (location.href.split("/").at(-1) != "nft") {
        window.location = "/nft";
      } else {
        onboarding.current.startOnboarding();
      }
    }
  };

  return (
    <button
      disabled={!initialized || (userWallet !== "" && !props.displayWithLink)}
      onClick={onClick}
      className={
        style.metamaskButton +
        " " +
        (props.displayFullAddress ? style.longDisplay : style.shortDisplay)
      }
    >
      <img src="/images/metamask.png" className={style.metamaskImage} />{" "}
      <span>{initialized ? buttonText : <Placeholder xs={6} />}</span>
    </button>
  );
};

export default MetamaskConnection;
