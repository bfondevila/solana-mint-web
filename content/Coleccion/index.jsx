import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";
import NFTSale from "../../components/NFTSale";
import style from "./coleccion.module.scss";

const Coleccion = () => {
  return (
    <main>
      <section className={style.section}>
        <div className={"text-center"}>
          <h1>CONOCE LA COLECCIÓN COMPLETA</h1>
          <p>
          Existen 24 versiones diferentes de “Estrella bajo un volcán” cuya única modificación
          es en los colores de los trajes de los enanos. Cuando compres un NFT no 
          sabrás de antemano qué obra te habrá tocado. Algunas de estas variaciones 
          de colores son menos probables que te toquen, haciendo algunas 
          de ellas más “raras” que otras. 
          </p>
        </div>
      </section>

      <section className={style.section}>
      Las probabilidades de que toque cada una de las 23 variaciones y su clasificación de rarezas son: 
      <div className="text-center">
        <NFTSale></NFTSale>
      </div>
      <NFTSale />
      </section>

      <section
        className={"text-center " + style.section + " " + style.pay_section}
      >
        <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
        <PayCTA />
      </section>
    </main>
  );
};

export default Coleccion;
