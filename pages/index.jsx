import { Button, Col, Container, Row } from "react-bootstrap";
import FeaturesList from "../components/FeaturesList";
import Image from "../components/Image";
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

        <Row as="section" className={"my-sm-4 " + style.introduction_container}>
          <Col
            xs={{ order: "last", span: 12 }}
            lg={{ order: "first", span: 5 }}
          >
            <div className={style.introduction + " " + style.section}>
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
          <Col xs={12} lg={5}>
            <div className="text-center">
              <Image
                src="/images/hero.png"
                className={style.heroImage + " my-2"}
                fluid="xs"
              />
              <Button className={style.btnFullWidth + " my-2"} href={"/nft"}>
                COMPRAR NFT POR 20€ O 8 MATIC
              </Button>
            </div>
          </Col>
        </Row>

        <Row as="section">
          <Col xs={12} lg={5} className={style.flexCol + " " + style.section}>
            <video
              width="300px"
              height="auto"
              poster="images/poster.png"
              controls
            >
              <source src="/videos/LaPalma_9x16.mp4" type="video/mp4"></source>
            </video>
          </Col>

          <Col xs={12} lg={5} className={style.section + " " + style.saleStats}>
            <div className="text-center">
              <NFTSaleStats />
            </div>
          </Col>
        </Row>
      </Container>

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
      <Container>
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
