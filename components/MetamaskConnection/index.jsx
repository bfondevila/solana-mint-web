import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import BlockieIdenticon from "./BlockieIdenticon";
import { Contract } from "../../constants/contract";

const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect Wallet";
const NOT_ADDED_TO_METAMASK_ERROR = 4902;

const MetamaskConnection = (props) => {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  const accountDisplay = (account) => {
    return (
      account.substring(0, 6) +
      "..." +
      account.substring(account.length - 4, account.length - 1)
    );
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

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(async () => {
    const metamaskConnected = localStorage.getItem("metamaskConnected");
    let timeSinceConnectionMs = false;
    if (metamaskConnected) {
      timeSinceConnectionMs = new Date() - new Date(metamaskConnected);
    }

    //Disconnect metamask after 60 minutes
    if (timeSinceConnectionMs && timeSinceConnectionMs < 60 * 60 * 1000) {
      function handleNewAccounts(newAccounts) {
        setAccounts(newAccounts);
        if (props.onAccountsChanged) {
          props.onAccountsChanged(newAccounts[0]);
        }
      }

      function handleChainChanged(_chainId) {
        window.location.reload();
      }

      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
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
    }
  }, []);

  React.useEffect(async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        await switchToContractChain();
        setButtonText(accountDisplay(accounts[0]));
        setDisabled(true);
        onboarding.current.stopOnboarding();
        localStorage.setItem("metamaskConnected", new Date());
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => setAccounts(newAccounts));
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
      {buttonText}
      <span hidden={accounts.length == 0}>
        <BlockieIdenticon
          address={accounts.length > 0 ? accounts[0] : ""}
          diameter="20px"
          alt="BlockieIdenticon"
        />
      </span>
    </button>
  );
};
export default MetamaskConnection;
