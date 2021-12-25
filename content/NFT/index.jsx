import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";
import style from "./nft.module.scss";
import PaymentSection from "../../components/PaymentSection";

const NFT = () => {
  return (
    <main>
      <section className={style.section}>
        <div className={style.introduction_container}>
          <div className={style.introduction}>
            <h2>¿Cómo comprar un NFT?</h2>
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
            <PayCTA></PayCTA>
          </div>
        </div>
      </section>

      <section className={style.section}>
        <div className={"text-center"}>
          La obra “Estrella bajo un volcán” está formada por 24 piezas de arte
          digital diseñadas por el pintor canario Octavio del Toro. Con un
          trasfondo social y cultural, el uso de la tecnología blockchain
          permite que cualquier persona pueda ser dueño de una exclusiva pieza
          de arte
        </div>
      </section>

      <section className={style.section}>
        <div className={"text-center"}>
          <div>
            <span>
              <img
                src="/images/collection/blanco-verde-bronce.png"
                width="300p"
                height="auto"
              ></img>
            </span>
          </div>
          <div>
            <span>
              <img
                src="/images/collection/morado-azul-bronce.png"
                width="300p"
                height="auto"
              ></img>
            </span>
          </div>
          <div>
            <span>
              <img
                src="/images/collection/blanco-verde-bronce.png"
                width="300p"
                height="auto"
              ></img>
            </span>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={"text-center black_background " + style.discover}>
          <div>CONOCE MÁS SOBRE:</div>
          <div>
            <span>
              <a href="/relato">LA HISTORIA</a>
            </span>
          </div>
          <div>
            <span>
              <a href="/causa">LA CAUSA SOLIDARIA</a>
            </span>
          </div>
          <div>
            <span>
              <a href="/coleccion"> LA COLECCIÓN</a>
            </span>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <FeaturesList data="Home"></FeaturesList>
      </section>
      <section
        className={"text-center " + style.section + " " + style.pay_section}
      >
        <PaymentSection></PaymentSection>
      </section>
    </main>
  );
};

export default NFT;
