import { Button, Col, Container, Image, Row } from "react-bootstrap";
import FeaturesList from "../components/FeaturesList";
import NFTSaleStats from "../components/NFTSaleStats";
import PaymentSection from "../components/PaymentSection";
import style from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Container>
        <Row as="section">
          <Col className={`text-center ${style.section}`} fluid={true}>
            <h1>Colección Afectados por Volcán de La Palma</h1>
            <h4>El NFT solidario de Octavio del Toro</h4>
          </Col>
        </Row>

        <Row as="section" className={"my-sm-4"}>
          <Col xs={12} lg={7}>
            <div className={style.introduction}>
              <h3 className="pt-3 pt-xs-0">ESTRELLA SOBRE UN VOLCÁN DORMIDO</h3>
              <h4>OCTAVIO DEL TORO</h4>
              <p>
                Apoya el arte canario y a los afectados del volcán de La Palma
                con la compra de un NFT. Puedes ser dueño de una exclusiva pieza
                de arte digital donde el 80% de la recaudación se destinará a
                los afectados por el volcán de La Palma.
              </p>
              <p>
                La colección “Estrella sobre un volcán dormido” es una fusión de
                arte físico y digital mezclando la democratización de la
                tecnología blockchain, la promoción del arte local canario y el
                apoyo económico a una causa social para los afectados por el
                volcán palmero.
              </p>
            </div>
          </Col>
          <Col
            xs={{ order: "first", size: 12 }}
            lg={{ order: "last", size: 5 }}
            className={style.flexCol}
          >
            <video width="300px" height="auto" controls>
              <source src="/videos/LaPalma_9x16.mp4" type="video/mp4"></source>
            </video>
          </Col>
        </Row>

        <Row as="section">
          <Col xs={12} lg={4}>
            <div className="text-center">
              <Image
                src="/images/collection/azul-blanco-negro.png"
                className={style.heroImage + " my-2"}
                fluid="xs"
              />
              <Button className={style.btnFullWidth + " my-2"} href={"/nft"}>
                COMPRAR NFT POR 20€ O 10 MATIC
              </Button>
            </div>
          </Col>
          <Col xs={12} lg={8} className={style.section + " " + style.saleStats}>
            <div className="text-center">
              <NFTSaleStats />
            </div>
          </Col>
        </Row>

        <section className={style.section}>
          <div className={"text-center black_background " + style.discover}>
            <p>DESCUBRE MÁS</p>
            <p>
              <a className="link" href="https://octaviodeltoro.com">
                OCTAVIO DEL TORO
              </a>
            </p>
          </div>
        </section>

        <section className={style.section}>
          <FeaturesList data="Home" />
        </section>

        <section
          className={"text-center " + style.section + " " + style.paddings}
        >
          <PaymentSection />
        </section>
      </Container>
    </>
  );
};

export default Home;
