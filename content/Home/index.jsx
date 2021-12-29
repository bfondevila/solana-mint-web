import { Button } from "react-bootstrap";
import FeaturesList from "../../components/FeaturesList";
import NFTSaleStats from "../../components/NFTSaleStats";
import PaymentSection from "../../components/PaymentSection";
import style from "./home.module.scss";

const Home = () => {
  return (
    <main>
      <section className={style.section}>
        <div className={"text-center"}>
          <h1>Colección Afectados por Volcán de La Palma</h1>
          <h4>El NFT solidario de Octavio del Toro</h4>
        </div>
        <div className={style.introduction_container}>
          <div className={style.introduction}>
            <h3>ESTRELLA BAJO UN VOLCÁN DORMIDO</h3>
            <h4>OCTAVIO DEL TORO</h4>
            <p>
              Apoya el arte canario y a los afectados del volcán de La Palma con
              la compra de un NFT. Puedes ser dueño de una exclusiva pieza de
              arte digital donde el 80% de la recaudación se destinará a los
              afectados por el volcán de La Palma.
            </p>
            <p>
              La colección “Estrella sobre un volcán dormido” es una fusión de
              arte físico y digital mezclando la democratización de la
              tecnología blockchain, la promoción del arte local canario y el
              apoyo económico a una causa social para los afectados por el volcán
              palmero.
            </p>
          </div>

          <div className={style.pic_container}>
            <img
              src="/images/collection/azul-blanco-negro.png"
              width="300p"
              height="auto"
            ></img>
            <Button href={"/nft"}>COMPRAR NFT POR 20€ O 10 MATIC</Button>
          </div>
          {<div>
            <video width="300p" height="auto" controls>
              <source src="videos/LaPalma_9x16.mp4" type="video/mp4"></source>
            </video>
          </div>}
        </div>
        <div className="text-center">
          <NFTSaleStats />
        </div>
      </section>

      <section className={style.section}>
        <div className={"text-center black_background " + style.discover}>

          <div>
            <span>
              <h5>
                DESCUBRE MÁS <br></br>
                <a className="link" href="https://octaviodeltoro.com">
                  OCTAVIO DEL TORO
                </a>
              </h5>
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
    </main>
  );
};

export default Home;
