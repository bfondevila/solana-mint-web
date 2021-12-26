import FeaturesList from "../../components/FeaturesList";
import PayCTA from "../../components/PayCTA";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import PaymentSection from "../../components/PaymentSection";
import Link from "next/link";
import style from "./nft.module.scss";

const NFT = () => {
  const router = useRouter();

  const imgLinks = [
    {
      src: "/images/collection/blanco-verde-bronce.png",
      background: "#999999",
    },
    {
      src: "/images/collection/morado-azul-bronce.png",
      background: "#7c6887",
    },
    {
      src: "/images/collection/blanco-verde-bronce.png",
      background: "#f4d47d",
    },
  ];

  const links = [
    {
      key: "relato",
      name: "LA HISTORIA",
      link: "/relato",
    },
    {
      key: "causa_social",
      name: "LA CAUSA SOLIDARIA",
      link: "/causa",
    },
    {
      key: "coleccion",
      name: "LA COLECCIÓN",
      link: "/coleccion",
    },
  ];

  return (
    <main>
      <section className={style.section}>
        <div className={"text-center"}>
          La obra “Estrella bajo un volcán” está formada por 24 piezas de arte
          digital diseñadas por el pintor canario Octavio del Toro. Con un
          trasfondo social y cultural, el uso de la tecnología blockchain
          permite que cualquier persona pueda ser dueño de una exclusiva pieza
          de arte
        </div>

        <div className="text-center">
          {imgLinks.map((entry) => (
            <img src={entry.src} width="300" height="auto"></img>
          ))}
        </div>
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
        <div className={"text-center black_background " + style.discover}>
          <h2>CONOCE MÁS SOBRE:</h2>
          <div className={style.link_container}>
            {links.map((entry) => {
              return (
                <Link
                  href={entry.link}
                  passHref
                  key={"MainNavbarLink" + entry.key}
                  className="link"
                >
                  <Nav.Link
                    className={entry.link === router.pathname ? "active" : ""}
                  >
                    {entry.name ?? entry.key}
                  </Nav.Link>
                </Link>
              );
            })}
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
