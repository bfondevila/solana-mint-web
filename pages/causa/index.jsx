import PaymentSection from "../../components/PaymentSection";
import TeamGrid from "../../components/TeamGrid";
import FeatureCard from "../../components/FeaturesList/FeatureCard";
import style from "./causa.module.scss";

const Causa = () => {
  const card_content = (
    <div className={style.align_text_left + " " + style.card_content}>
      <p className={style.card_title}>
        Los objetivos del proyecto “Estrella sobre un volcán dormido” son:
      </p>
      <p> Promover el arte local canario mediante la tecnología blockchain.</p>
      <p>
        Democratizar el acceso a la compra de una obra digital a usuarios que
        nunca han comprado un NFT.
      </p>
      <p>
        Gamificar la venta y apremiar a los compradores con versiones físicas y
        digitales limitadas de la colección.
      </p>
      <p>
        Visibilizar y apoyar acciones solidarias para los afectados por el
        volcán de La Palma.
      </p>
    </div>
  );

  return (
    <>
      <section className={style.section + " " + style.paddings}>
        <div className={"text-center"}>
          <h1>UNA BUENA CAUSA</h1>
        </div>
        <div className={style.introduction_container}>
          <div className={style.introduction}>
            <FeatureCard content={card_content}></FeatureCard>
          </div>
        </div>
        <div className={"text-center"}>
          <h3>
            El 80% de la recaudación irá destinada a acciones solidarias para
            los afectados por el volcán de La Palma.
          </h3>
        </div>
      </section>

      <section>
        <div
          className={
            "text-center" +
            " " +
            style.white_background +
            " " +
            style.paddings_plus
          }
        >
          <h2 className={style.section_title}>
            Conoce más sobre el proyecto directamente por los fundadores
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/G9vMrkFaby8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className={style.section}>
        <div className={"text-center" + " " + style.paddings}>
          <h2 className={style.section_title}>NUESTRO EQUIPO</h2>
          <TeamGrid />
        </div>
      </section>

      <section className={style.section}>
        <div
          className={
            "text-center white_background " +
            style.discover +
            " " +
            style.paddings_plus
          }
        >
          <h2>CON EL APOYO DE:</h2>
          <div>
            <span>
              <img
                src="/images/lecover_abogados.PNG"
                width="300p"
                height="auto"
              ></img>
            </span>
          </div>
          <div>
            <span>
              <img
                src="/images/fotoarte_black.png"
                width="300p"
                height="auto"
              ></img>
            </span>
          </div>
        </div>
      </section>

      <section className={"text-center " + style.paddings_plus}>
        <PaymentSection />
      </section>
    </>
  );
};

export default Causa;
