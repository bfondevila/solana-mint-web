import FeaturesList from "../../components/FeaturesList";
import FeatureCard from "../../components/FeaturesList/FeatureCard";
import PayCTA from "../../components/PayCTA";
import { Nav,Button} from "react-bootstrap";
import { useRouter } from "next/router";
import PaymentSection from "../../components/PaymentSection";
import Link from "next/link";
import style from "./nft.module.scss";
import Header from "../../widgets/Header";
import MetamaskConnection from "../../components/MetamaskConnection";
import { useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";


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

  const connected_card_content = (
    <div className={style.align_text_left + " " + style.card_content}>
      <div className={style.card_content_container}>
        <h2>¿Cómo comprar un NFT?</h2>
        <p>
        Compra una o varias unidades a través de Paypal o pagando con MATIC
          (cada NFT cuesta 20€)
        </p> 
      </div>
    </div>
  );

  const disconnected_card_content = (
    <div className={style.align_text_left + " " + style.card_content}>
      <div className={style.card_content_container}>
        <h2>¿Cómo comprar un NFT?</h2>
        <p>
          Conecta tu monedero. Si no tienes, nosotros te guiamos cómo crearlo
        </p>
        
      </div>
    </div>
  );

  const [userWallet, setUserWallet] = useState("");

  const isConnected = () => {
    return userWallet !== "";
  };

  const handleAccountsChanged = async (accounts) => {
    const userAccount = accounts.length > 0 ? accounts[0] : "";
    setUserWallet(userAccount);
  };

  return (
    
    <main>
      <Header onAccountsChanged={handleAccountsChanged} />
      <section className={style.section}>
        <div className={style.introduction_container}>
          <div className={style.introduction}>
          {!isConnected() && (
            <FeatureCard content={disconnected_card_content}></FeatureCard>
          )}
          {isConnected() && (
            <FeatureCard content={connected_card_content}></FeatureCard>
          )}     
          </div>
        </div>
        {!isConnected() && (
            <div className={"text-center " + style.btn_container}>
               <Button href={"https://docs.google.com/document/d/1aHsFnM6tkibs6I-EfpT_KjOwq-ik8StR89JQeEObqIQ/edit"}>
                 ¿Cómo crear un wallet?
              </Button>
              <div className={"btn " + style.social}>
                <MetamaskConnection onAccountsChanged={handleAccountsChanged} />
            </div>
          </div>
          )}
          {isConnected() && (
            <div className={"text-center container"}>
            <PayCTA />
          </div>
          )}
        
      </section>
      <section className={style.section + " white_background"}>
        <div className={"text-center container" + " " + style.paddings}>
          <h4 className={style.justify_text}>
            La obra “Estrella bajo un volcán” está formada por 24 piezas de arte
            digital diseñadas por el pintor canario Octavio del Toro. Con un
            trasfondo social y cultural, el uso de la tecnología blockchain
            permite que cualquier persona pueda ser dueño de una exclusiva pieza
            de arte
          </h4>

          {imgLinks.map((entry) => (
            <img src={entry.src} width="300" height="auto"></img>
          ))}
        </div>
      </section>

      <section>
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
                    className={
                      entry.link === router.pathname
                        ? "active " + style.link
                        : style.link
                    }
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
        <FeaturesList data="NFT"></FeaturesList>
      </section>
      <section
        className={
          "text-center white_background " + style.section + " " + style.paddings
        }
      >
        <PaymentSection />
      </section>
    </main>
  );
};

export default NFT;
