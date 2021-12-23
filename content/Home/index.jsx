import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";
import NFTSaleStats from "../../components/NFTSaleStats";

const Home = () => {
  return (
    <Container>
      <Row className="text-center">
        <h1>Colección Afectados por Volcán de La Palma</h1>
        <h4>El NFT solidario de Octavio del Toro</h4>
      </Row>
      <Row>
        <Col>
          <h3>ESTRELLA BAJO UN VOLCÁN DORMIDO</h3>
          <h4>OCTAVIO DEL TORO</h4>
          <p>
            Apoya el arte canario y a los afectados del volcán de La Palma con
            la compra de un NFT. Puedes ser dueño de una exclusiva pieza de arte
            digital donde el 80% de la recaudación se destinará a los afectados
            por el volcán de La Palma.
          </p>
          <p>
            La colección “Estrella sobre un volcán dormido” es una fusión de
            arte físico y digital mezclando la democratización de la tecnología
            blockchain, la promoción del arte local canario y el apoyo económico
            a una causa social de los afectados por el volcán palmero.
          </p>
        </Col>
        <Col className="text-center">
          <img src="/images/collection/rojo-plata-negro.png" width="300p" height="auto"></img>
          <Button href={"/nft"}>COMPRAR NFT POR 20€ O 10 MATIC</Button>
        </Col>
        <Col>
          <video width="200p" height="auto" controls>
            <source src="videos/LaPalma_9x16.mp4" type="video/mp4"></source>
          </video>{" "}
        </Col>
      </Row>
      <Row className="text-center">
        <NFTSaleStats
          totalSales="5.480€"
          lastSale="53 minutos"
          deadline="2021-12-30"
        />
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
            <a href="https://octaviodeltoro.com">OCTAVIO DEL TORO</a>
          </span>
        </Col>
      </Row>
      <Row>
        <FeaturesList data="Home"></FeaturesList>
      </Row>
      <Row className="text-center">
        <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
        <PayCTA></PayCTA>
      </Row>
    </Container>
  );
};

export default Home;
