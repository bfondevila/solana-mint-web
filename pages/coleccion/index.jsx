import { Container } from "react-bootstrap";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import Coleccion from "../../content/Coleccion";

export default function ColeccionPage() {
  return (
    <Container>
      <Header />

     <Coleccion />

      <Footer />
    </Container>
  );
}
