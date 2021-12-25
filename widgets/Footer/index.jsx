import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import style from "./footer.module.scss";

const Footer = () => {
  const mainLinks = [
    {
      key: "venta_nft",
      name: "COMPRAR NFT",
      link: "/nft",
    },
    {
      key: "coleccion",
      name: "COLECCIÓN",
      link: "/nft",
    },
    {
      key: "historia",
      name: "HISTORIA",
      link: "/historia",
    },
    {
      key: "causa_social",
      name: "CAUSA SOCIAL",
      link: "/",
    },
  ];

  const secondaryLinks = [
    {
      key: "aviso_legal",
      name: "AVISO LEGAL",
      link: "/",
    },
    {
      key: "politica_cookies",
      name: "POLÍTICA DE COOKIES",
      link: "/",
    },
    {
      key: "politica_privacidad",
      name: "POLÍTICA DE PRIVACIDAD",
      link: "/",
    },
  ];

  return (
    <footer className={"black_background " + style.footer}>
      <div className={style.footer_container}>
        <div className={style.title}>
          <h2 className={"text-center " + style.title}>
            made with love for La Palma
          </h2>
        </div>
        <div className={style.links_container}>
          <div className={style.links_left}>
            {mainLinks.map((entry, index) => {
              return (
                <div key={"footerLink" + index}>
                  <a
                    className="link"
                    href={entry.link}
                    key={"FooterLink" + entry.key}
                  >
                    {entry.name}
                  </a>
                </div>
              );
            })}
          </div>
          <div className={style.links_right}>
            {secondaryLinks.map((entry, index) => {
              return (
                <div key={"footerLinkSecondary" + index}>
                  <a
                    className="link"
                    href={entry.link}
                    key={"FooterLink" + entry.key}
                  >
                    {entry.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
