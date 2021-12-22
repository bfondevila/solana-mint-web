import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';

// code from: https://docs.metamask.io/guide/onboarding-library.html#examples
const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';

const MetamaskConnection = () => {
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding = React.useRef();

    React.useEffect(() => {
      if (!onboarding.current) {
        onboarding.current = new MetaMaskOnboarding();
      }
    }, []);

    React.useEffect(() => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if (accounts.length > 0) {
          setButtonText(accounts[0]);
          setDisabled(true);
          onboarding.current.stopOnboarding();
        } else {
          setButtonText(CONNECT_TEXT);
          setDisabled(false);
        }
      }
    }, [accounts]);

    React.useEffect(() => {
      function handleNewAccounts(newAccounts) {
        setAccounts(newAccounts);
      }
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(handleNewAccounts);
        window.ethereum.on('accountsChanged', handleNewAccounts);
        return () => {
          window.ethereum.removeListener('accountsChanged', handleNewAccounts);
        };
      }
    }, []);

    const onClick = () => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((newAccounts) => setAccounts(newAccounts));
      } else { 
        // redirect to new page to explain how to create Metamask
        if (location.href.split('/').at(-1) != 'nft'){
          window.location = '/nft';
        } else {
          onboarding.current.startOnboarding();    
        }    
      }
    };
    return (
      <button disabled={isDisabled} onClick={onClick}>
        {buttonText}
      </button>
    );
};
export default MetamaskConnection;

