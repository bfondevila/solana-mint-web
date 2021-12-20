import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";
import NFTSaleStats from "../../components/NFTSaleStats";
import MetamaskConnection from "../../components/MetamaskConnection";

const Home = () => {
  return (
    <Container>
      <Row className="text-center">
        <h1>Colección Solidaria Volcán de La Palma</h1>
        <h4>Obtén un pedazo de arte digital de la historia palmera</h4>
      </Row>
      <Row>
        <Col>
          <h3>ESTRELLA BAJO UN VOLCÁN</h3>
          <h4>OCTAVIO DEL TORO</h4>
          <p>
            El NFT solidario de Octavio del Toro. Puedes ser dueño de una
            exclusiva pieza de arte digital por 20€ donde el 80% de la
            recaudación se destinará a los afectados por el volcán de La Palma.
          </p>
          <p>
            La colección “Estrella sobre un volcán” es una fusión de arte físico
            y digital mezclando la democratización de la tecnología blockchain,
            la promoción del arte local canario y el apoyo económico a una causa
            social de los afectados por el volcán palmero.
          </p>
        </Col>
        <Col className="text-center">
          <img src="https://as01.epimg.net/diarioas/imagenes/2021/12/07/actualidad/1638859529_126758_1638868324_noticia_normal_recorte1.jpg"></img>
          <Button href={"/"}>COMPRAR NFT</Button>
        </Col>
      </Row>
      <Row className="text-center">
        <NFTSaleStats></NFTSaleStats>
      </Row>
      <Row className="text-center">
        <Col>
          <span>
            VALIDADO LEGALMENTE <br></br>
            POR LOCOVERA
          </span>
        </Col>
        <Col>
          <span>
            DESCUBRE MÁS <br></br>
            <a href="/historia">OCTAVIO DEL TORO</a>
          </span>
        </Col>
      </Row>
      <Row>
        <FeaturesList></FeaturesList>
      </Row>
      <Row className="text-center">
        <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
        <PayCTA></PayCTA>
      </Row>
    </Container>
  );
};

export default Home;
