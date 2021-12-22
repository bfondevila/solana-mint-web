import { Container } from "react-bootstrap";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import Causa from "../../content/Causa";


export default function CausaPage() {
  return (
    <Container>
      <Header />

      <Causa />

      <Footer />
    </Container>
  );
}
