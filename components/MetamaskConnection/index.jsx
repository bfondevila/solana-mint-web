import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { Contract } from "../../constants/contract";
import style from "./metamask.module.scss";

const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect Wallet";
const NOT_ADDED_TO_METAMASK_ERROR = 4902;

const MetamaskConnection = (props) => {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

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
    setAccounts(newAccounts);
    if (props.onAccountsChanged) {
      props.onAccountsChanged(newAccounts);
    }
  };

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(async () => {
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
    }
  }, []);

  React.useEffect(async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        await switchToContractChain();
        setButtonText(accountDisplay(accounts[0]));
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  const onClick = async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => handleNewAccounts(newAccounts))
        .catch(() => window.location.reload());
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
    <button disabled={isDisabled} onClick={onClick}>
      <img src="/images/metamask.png" className={style.metamaskImage} />{" "}
      <span>{buttonText}</span>
    </button>
  );
};
export default MetamaskConnection;
