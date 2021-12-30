import NFTSale from "../../components/NFTSale";
import PaymentSection from "../../components/PaymentSection";
import style from "./coleccion.module.scss";

const Coleccion = () => {
  return (
    <>
      <section className={style.paddings + " white_background"}>
        <div className={style.introduction_container}>
          <div className={style.introduction}>
            <div className={"text-center"}>
              <h1>CONOCE LA COLECCIÓN COMPLETA</h1>
              <p className={style.justify_text}>
                Existen 24 versiones diferentes de “Estrella bajo un volcán”
                cuya única modificación es en los colores de los trajes de los
                enanos. Cuando compres un NFT no sabrás de antemano qué obra te
                habrá tocado. Algunas de estas variaciones de colores son menos
                probables que te toquen, haciendo algunas de ellas más “raras”
                que otras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={"text-center " + style.section}>
        <div className={"text-center"}>
          <div className={style.grid_container}>
            <h3>
              LAS PROBABILIDADES DE QUE TOQUE CADA UNA DE LAS 24 VARIACIONES Y
              SU CLASIFICACIÓN DE RAREZAS SON:
            </h3>
            <hr className={style.sep_line}></hr>
            <NFTSale />
          </div>
        </div>
      </section>

      <section
        className={"text-center " + style.section + " " + style.pay_section}
      >
        <PaymentSection />
      </section>
    </>
  );
};

export default Coleccion;
