import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";

const MetamaskConnection = () => {
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

  //Check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  //This will start the onboarding proccess
  const onClickInstall = () => {
    onboardButton.innerText = "Onboarding in progress";
    onboardButton.disabled = true;
    //On this object we have startOnboarding which will start the onboarding process for our end user
    onboarding.startOnboarding();
  };

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    }
  };

  const MetaMaskClientCheck = () => {
    //Check to see if Metmask is installed
    if (!isMetaMaskInstalled()) {
      return (
        <Button onclick={onClickInstall} disabled={false}>
          Click here to install MetaMask!
        </Button>
      );
    } else {
      //If it is installed we change our button text
      return (
        <Button onclick={onClickConnect} disabled={false}>
          Connect!
        </Button>
      );
    }
  };

  return (
    <Container>
      <Row className="text-center">{MetaMaskClientCheck}</Row>
    </Container>
  );
};

export default MetamaskConnection;
