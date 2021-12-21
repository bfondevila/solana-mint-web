import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";

const MetamaskConnection = () => {
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

  const [text, setText] = useState("");

  const [disabled, setDisabled] = useState(false);

  const handleDisabled = () => setDisabled(true);
  const handleEnable = () => setDisabled(false);

  const [onClickFunction, setOnClickFunction] = useState();

  //Check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  //This will start the onboarding proccess
  const onClickInstall = () => {
    setText("Onboarding in progress");
    handleDisabled();
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

  //Set button depending on whether metamask is installed
  if (!isMetaMaskInstalled()) {
    handleEnable();
    setText("Click here to install MetaMask!");
    setOnClickFunction(onClickInstall);
  } else {
    handleEnable();
    setText("Connect!");
    setOnClickFunction(onClickConnect);
  }

  return (
    <Container>
      <Row className="text-center">
        <Button onClick={onClickFunction} disabled={disabled}>
          {text}
        </Button>
      </Row>
    </Container>
  );
};

export default MetamaskConnection;
