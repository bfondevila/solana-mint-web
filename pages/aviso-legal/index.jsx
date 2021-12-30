import { Col, Container, Image, Row } from "react-bootstrap";
import style from "./aviso-legal.module.scss";
import FeatureCard from "../../components/FeaturesList/FeatureCard";


const aviso_legal = () => {

  const card_content = (
    <div className={style.align_text_left + " " + style.card_content}>
      <p>
      En este proyecto no se almacenan cookies propias ni almacenamiento de datos privados
      </p>
      <p>
      La información sobre la compra de los NFTs y las direcciones wallet son de acceso público a través del smart contract y la blockchain de Polygon
      </p>
      <p>
      Asesoramiento legal por Locovera
      </p>
    </div>
  );
  
  return (
    <>
      <Container>
        <section className={style.section + " " + style.paddings}>
        <div className={"text-center"}>
        <h1>Aviso Legal</h1>
            <h3>Política de Tratamiento y Privacidad de datos y cookies</h3>
        </div>
        <div className={style.introduction_container}>
          <div className={style.introduction}>
            <FeatureCard content={card_content}></FeatureCard>
          </div>
        </div>
      </section>
      </Container>
    </>
  );
};

export default aviso_legal;
