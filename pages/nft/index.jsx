import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Button, Nav, Row } from "react-bootstrap";
import FeaturesList from "../../components/FeaturesList";
import FeatureCard from "../../components/FeaturesList/FeatureCard";
import MetamaskConnection from "../../components/MetamaskConnection";
import NFTSaleItem from "../../components/NFTSale/NFTSaleItem";
import PayCTA from "../../components/PayCTA";
import PaymentSection from "../../components/PaymentSection";
import { WalletContext } from "../../providers/WalletProvider";
import style from "./nft.module.scss";

const NFT = () => {
  const router = useRouter();

  const nftRarityExamples = [
    {
      img: "/images/collection/blanco-verde-bronce.png",
      rarity: 0.005,
      unique: true,
    },
    {
      img: "/images/collection/morado-azul-bronce.png",
      rarity: 0.005,
    },
    {
      img: "/images/collection/blanco-verde-bronce.png",
      rarity: 0.005,
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
          Conecta tu monedero. Si no tienes, nosotros te guiamos cómo crearlo👇
        </p>
      </div>
    </div>
  );

  const { userWallet } = useContext(WalletContext);
  const isConnected = () => {
    return userWallet !== "";
  };

  return (
    <>
      <section>
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
            <Button
              href={
                "https://docs.google.com/document/d/1aHsFnM6tkibs6I-EfpT_KjOwq-ik8StR89JQeEObqIQ/edit"
              }
              target="_blank"
            >
              ¿Cómo crear un wallet?
            </Button>
            <MetamaskConnection />
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
          <h3 className={style.justify_text}>
            La obra “Estrella sobre un volcán” está formada por 24 piezas de arte
            digital diseñadas por el pintor canario Octavio del Toro. Con un
            trasfondo social y cultural, el uso de la tecnología blockchain
            permite que cualquier persona pueda ser dueño de una exclusiva pieza
            de arte:
          </h3>
          <Row>
            {nftRarityExamples.map((item, index) => {
              return (
                <NFTSaleItem
                  imageUrl={item.img}
                  rarity={item.rarity}
                  unique={item.unique}
                  index={index}
                  key={index}
                  cleanDesign={true}
                />
              );
            })}
          </Row>
        </div>
      </section>

      <section>
        <div className={"text-center black_background " + style.discover}>
          <h2>CONOCE MÁS SOBRE:</h2>
          <div className={style.link_container}>
            {links.map((entry, index) => {
              return (
                <Link
                  href={entry.link}
                  passHref
                  key={"MainNavbarLink" + entry.key}
                  className="link"
                  key={index}
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
        <FeaturesList data="NFT" />
      </section>
      <section
        className={"text-center " + style.section + " " + style.paddings}
      >
        <PaymentSection />
      </section>
    </>
  );
};

export default NFT;
