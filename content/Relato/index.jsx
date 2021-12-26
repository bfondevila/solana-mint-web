import PaymentSection from "../../components/PaymentSection";
import style from "./relato.module.scss";

const Relato = () => {
  return (
    <main>
      <section className={style.section}>
        <div className={"text-center"}>
          <h1>La isla de La Palma, el volcán y los Enanos</h1>
          <img
            src="/images/anelio.jpeg"
            width="300p"
            height="auto"
            class="center"
          ></img>
          <h3>El relato detrás de la ceniza</h3>
          <h5>por Anelio Rodríguez Concepción</h5>
        </div>
      </section>

      <section className={style.section}>
        <div>
          En La Palma no hace mucho explotó un volcán, el último hasta ahora de
          una larga serie que descuella en el paisaje cambiante. Irrumpió
          escupiendo fuego por varias bocas, y se desmelenó a gusto, por
          supuesto ocasionando estragos. Los habitantes de la isla, desde
          siempre dispuestos al sacrificio que impone la Naturaleza con
          mayúsculas, soportaron este cataclismo como la enésima señal de su
          destino en medio de la mar océana: por alto que sea el precio de vivir
          en el paraíso, se paga a conciencia con probidad heroica –hasta tal
          punto lo merece–. El caso es que ese nuevo volcán se pasó de cruel
          tanto en el encadenamiento como en la duración de sus emanaciones, y
          por ello la gente, siguiendo el ejemplo transmitido durante siglos
          entre ancestros sin nombre, tuvo que apelar al sentido de la
          solidaridad. Así, la entereza de una isla pequeña, acaso perdida, como
          a la deriva, acabó causando asombro en los cuatro puntos cardinales.
          Desde pronto el mundo fue testigo de lo terrible de la situación; se
          estremeció con su devenir y celebró el proceso final, el de la vuelta
          a la paz que ya había antes del primer estallido en Cumbre Vieja, como
          prueba de que el dolor nunca consigue hacerse infinito. Sin embargo,
          llegado el momento, nadie supo cómo se produjo realmente la derrota
          del volcán, abocado al colapso por los excesos de su propio arrebato.
          Ese apagado se explica en pocas palabras: los Enanos de la Virgen de
          Las Nieves, quizá los habitantes más portentosos de La Palma, por no
          decir los más mágicos, unieron sus sentimientos de tristeza ante el
          encono continuado de la lava y las nubes de ceniza. Con un nudo en la
          garganta, sin decir ni pío, los Enanos cada día contemplaban el
          desastre convirtiendo sus pensamientos en conjuros. Ese vínculo de
          fuerzas emocionales acertó a contrarrestar las potencias telúricas que
          bullían bajo tierra. De manera que, gracias a la ternura de unas
          criaturas envueltas en misterio, la energía positiva de los afectos
          obró un prodigio de la termodinámica que raras veces se prodiga más
          allá del ámbito de los mitos. Ya desde entonces comprendemos que todas
          las personas de buena voluntad, e incluso los personajes creados por
          el ensueño colectivo, pueden revocar la indiferencia del Universo. Les
          basta con imaginar cómo se disipan el vacío y el fuego en un
          inagotable surtidor de esperanza.
        </div>
      </section>

      <section
        className={"text-center " + style.section + " " + style.pay_section}
      >
        <PaymentSection />
      </section>
    </main>
  );
};

export default Relato;
