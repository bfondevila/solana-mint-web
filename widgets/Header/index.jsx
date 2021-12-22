import { PROJECT_NAME } from "../../constants/common.js";
import Head from "next/head";
import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./header.module.scss";
import MetamaskConnection from "../../components/MetamaskConnection";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const router = useRouter();

  const links = [
    {
      key: "home",
      name: "HOME",
      link: "/"
    },
    {
      key: "venta_nft",
      name: "COMPRAR NFT",
      link: "/nft",
    },
    {
      key: "coleccion",
      name: "COLECCIÓN",
      link: "/coleccion", 
    },
    {
      key: "relato",
      name: "RELATO",
      link: "/relato",
    },
    {
      key: "causa_social",
      name: "CAUSA SOCIAL",
      link: "/causa", 
    },
  ];

  // NOT WORKING: Iconos Sociales. Instalar paquetes FontAwesome
  //  <FontAwesomeIcon icon={faTwitterSquare} />
  //  <FontAwesomeIcon icon={faInstagram} />

  return (
    <Navbar bg="light" expand="lg">
      <Head>
        <title>{PROJECT_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Navbar.Brand>{PROJECT_NAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((entry) => {
              return (
                <Link
                  href={entry.link}
                  passHref
                  key={"MainNavbarLink" + entry.key}
                >
                  <Nav.Link
                    className={entry.link === router.pathname ? "active" : ""}
                  >
                    {entry.name ?? entry.key}
                  </Nav.Link>
                </Link>
              );
            })}
            <MetamaskConnection>PAPI</MetamaskConnection>
            <Container>Iconos Sociales</Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
