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
    <footer>
      <Container>
        <Row>
          <Col className="text-center">made with love for La Palma</Col>
        </Row>
        <Row>
          <Col xs={2} md={4}></Col>
          <Col>
            {mainLinks.map((entry) => {
              return (
                <Row>
                  <a href={entry.link} key={"FooterLink" + entry.key}>
                    {entry.name}
                  </a>
                </Row>
              );
            })}
          </Col>
          <Col>
            {secondaryLinks.map((entry) => {
              return (
                <Row>
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
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 25px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
