import { Container } from "react-bootstrap";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import Relato from "../../content/Relato";

export default function RelatoPage() {
  return (
    <Container>
      <Header />

      <Relato />

      <Footer />
    </Container>
  );
}
