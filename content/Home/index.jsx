import { Button, Image, Container, Row, Col } from "react-bootstrap";
import FeaturesList from "../../components/FeaturesList";
import NFTSaleStats from "../../components/NFTSaleStats";
import PaymentSection from "../../components/PaymentSection";
import style from "./home.module.scss";

const Home = () => {
  return (
    <main>
      <Container>
        <Row as="section">
          <Col className={`text-center ${style.section}`} fluid>
            <h1>Colección Afectados por Volcán de La Palma</h1>
            <h4>Obten un pedazo de arte digital de la historia palmera</h4>
          </Col>
        </Row>

        <Row className={style.section} as="section">
          <Col xs={12} md={7}>
            <Row>
              <Col xs={12}>
                <div className={style.introduction}>
                  <h3>ESTRELLA BAJO UN VOLCÁN DORMIDO</h3>
                  <h4>OCTAVIO DEL TORO</h4>
                  <p>
                    Apoya el arte canario y a los afectados del volcán de La
                    Palma con la compra de un NFT. Puedes ser dueño de una
                    exclusiva pieza de arte digital donde el 80% de la
                    recaudación se destinará a los afectados por el volcán de La
                    Palma.
                  </p>
                  <p>
                    La colección “Estrella sobre un volcán dormido” es una
                    fusión de arte físico y digital mezclando la democratización
                    de la tecnología blockchain, la promoción del arte local
                    canario y el apoyo económico a una causa social de los
                    afectados por el volcán palmero.
                  </p>
                </div>
              </Col>
              <Col xs={{ order: "first", size: 12 }} md={{ order: "last" }}>
                <Button className={style.btnFullWidth + " mb-4"} href={"/nft"}>
                  COMPRAR NFT POR 20€ O 10 MATIC
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ order: "first", size: "12" }}
            md={{ order: "last", size: "5" }}
            className={style.flexCol}
          >
            <div>
              <Image
                src="/images/collection/azul-blanco-negro.png"
                className={style.heroImage}
                fluid="xs"
              />
            </div>
          </Col>
        </Row>

        <Row as="section">
          <Col className={style.section}>
            <div className="text-center">
              <NFTSaleStats />
            </div>
          </Col>
        </Row>

        <section className={style.section}>
          <div className={"text-center black_background " + style.discover}>
            <div>
              <span className="black_banner_text">
                VALIDADO LEGALMENTE <br></br>
                POR LOCOVERA
              </span>
            </div>
            <div>
              <span>
                DESCUBRE MÁS <br></br>
                <a className="link" href="https://octaviodeltoro.com">
                  OCTAVIO DEL TORO
                </a>
              </span>
            </div>
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
    </main>
  );
};

export default Home;
