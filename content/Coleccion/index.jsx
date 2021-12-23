import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";
import NFTSale from "../../components/NFTSale";

const Coleccion = () => {
  return (
    <Container>
      <Row className="text-center">
      <h1>CONOCE LA COLECCIÓN COMPLETA</h1>

      Existen 24 versiones diferentes de “Estrella bajo un volcán” cuya única modificación
       es en los colores de los trajes de los enanos. Cuando compres un NFT no 
       sabrás de antemano qué obra te habrá tocado. Algunas de estas variaciones 
       de colores son menos probables que te toquen, haciendo algunas 
       de ellas más “raras” que otras. 
      </Row>
      
      <p></p>
      <Row className="text-center">
      Las probabilidades de que toque cada una de las 23 variaciones y su clasificación de rarezas son: 
      <NFTSale />
      </Row>

      <Row className="text-center">
        <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
        <PayCTA></PayCTA>
      </Row>
    </Container>
  );
};

export default Coleccion;
