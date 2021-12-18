import { Container } from "react-bootstrap";
import Home from "../content/Home";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";

export default function App() {
  return (
    <Container>
      <Header />

      <Home />

      <Footer />
    </Container>
  );
}
