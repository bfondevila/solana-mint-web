import { Col, Container, Row, Button, Card, CardBody, CardTitle } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";

const NFT = () => {
  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>¿Cómo comprar un NFT?</Card.Title>
            <ul>
              <li>
                1. Conecta tu monedero. Si no tienes, nosotros te guiamos cómo
                crearlo
              </li>
              <li>
                2. Compra una o varias unidades a través de Paypal o pagando con
                MATIC (cada NFT cuesta 20€)
              </li>
              <li>
                3. Listo, ahora eres dueño de una de las 24 piezas de arte{" "}
              </li>
            </ul>
          </Card.Body>
          <PayCTA></PayCTA>
        </Card>
      </Row>
      <Row className="text-center">
        <h4>
          El 80% de los recaudado irá destinado a causas solidarias para los
          afectados por el volcán de La Palma
        </h4>
      </Row>
      <Row className="text-center">
        <Row>
          <p>
            La obra “Estrella bajo un volcán” está formada por 24 piezas de arte
            digital diseñadas por el pintor canario Octavio del Toro. Con un
            trasfondo social y cultural, el uso de la tecnología blockchain
            permite que cualquier persona pueda ser dueño de una exclusiva pieza
            de arte
          </p>
        </Row>
        <Row>
          <Col>
            <img
              src="/images/collection/blanco-verde-bronce.png"
              width="300p"
              height="auto"
            ></img>
          </Col>
          <Col>
            <img
              src="/images/collection/negro-blanco-rojo.png"
              width="300p"
              height="auto"
            ></img>
          </Col>
          <Col>
            <img
              src="/images/collection/morado-azul-bronce.png"
              width="300p"
              height="auto"
            ></img>
          </Col>
        </Row>
      </Row>
      <Row className="text-center">
        <Col xs="12" lg="12">
          <h4>CONOCE MÁS SOBRE</h4>
        </Col>
        <Col xs="4" lg="4">
          <a href="/relato">LA HISTORIA</a>
        </Col>
        <Col xs="4" lg="4">
          <a href="/causa">LA CAUSA SOLIDARIA</a>
        </Col>
        <Col xs="4" lg="4">
          <a href="/coleccion"> LA COLECCIÓN</a>
        </Col>
      </Row>
      <Row>
        <FeaturesList data="NFT"></FeaturesList>
      </Row>
      <Row className="text-center">
        <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
        <PayCTA></PayCTA>
      </Row>
    </Container>
  );
};

export default NFT;
