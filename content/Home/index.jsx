import { Container } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";

const Home = () => {
  return (
    <Container>
      <h1>Welcome to our website!</h1>
      <p>An amazing website for {PROJECT_NAME}</p>
    </Container>
  );
};

export default Home;
