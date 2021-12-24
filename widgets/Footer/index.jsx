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
      <Container>
        <Row>
          <Col className="text-center">made with love for La Palma</Col>
        </Row>
        <Row>
          <Col xs={2} md={4}></Col>
          <Col>
            {mainLinks.map((entry, index) => {
              return (
                <Row key={"footerLink"+index}>
                  <a href={entry.link} key={"FooterLink" + entry.key}>
                    {entry.name}
                  </a>
                </Row>
              );
            })}
          </Col>
          <Col>
            {secondaryLinks.map((entry, index) => {
              return (
                <Row key={"footerLinkSecondary"+index}>
                  <a href={entry.link} key={"FooterLink" + entry.key}>
                    {entry.name}
                  </a>
                </Row>
              );
            })}
          </Col>
          <Col xs={2} md={4}></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
