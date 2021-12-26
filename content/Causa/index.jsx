import PaymentSection from "../../components/PaymentSection";
import TeamGrid from "../../components/TeamGrid";
import style from "./causa.module.scss";

const Causa = () => {
  return (
    <main>
      <section className={style.section}>
        <div className={"text-center"}>
          <h1>Una buena causa</h1>
        </div>
        <div className={style.introduction}>
          Los objetivos del proyecto “Estrella sobre un volcán dormido” son:
          <ul>
            <li>
              Promover el arte local canario mediante la tecnología blockchain;
            </li>
            <li>
              Democratizar el acceso a la compra de una obra digital a usuarios
              que nunca han comprado un NFT;
            </li>
            <li>
              Gamificar la venta y apremiar a los compradores con versiones
              físicas y digitales limitadas de la colección;
            </li>
            <li>
              Visibilizar y apoyar acciones solidarias para los afectados por el
              volcán de La Palma.
            </li>
          </ul>
          El 80% de la recaudación irá destinada a acciones solidarias para
          los afectados por el volcán de La Palma.
        </div>
      </section>

      <section>
        <div className={"text-center"}>
          <h2>Conoce más sobre el proyecto directamente por los fundadores</h2>
          <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/G9vMrkFaby8" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
        </div>
      </section>

      <section>
        <div className={"text-center"}>
          <h2>NUESTRO EQUIPO</h2>
          <TeamGrid></TeamGrid>
        </div>
      </section>

      <section>
        <div className={"text-center black_background " + style.discover}>
          <h2>CON EL APOYO DE:</h2>
          <div>
            <span>
              <img src="/images/lecover.webp" width="200p" height="auto"></img>
            </span>
          </div>
          <div>
            <span>
              <img src="/images/fotoarte.png" width="200p" height="auto"></img>
            </span>
          </div>
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

export default Causa;
