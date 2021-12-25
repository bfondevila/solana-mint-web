import { PROJECT_NAME } from "../../constants/common.js";
import Head from "next/head";
import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./header.module.scss";
import MetamaskConnection from "../../components/MetamaskConnection";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = (props) => {
  const router = useRouter();

  const links = [
    {
      key: "home",
      name: "HOME",
      link: "/",
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
    {
      key: "mi_cuenta",
      name: "MI CUENTA",
      link: "/mi-cuenta",
    },
  ];

  // NOT WORKING: Iconos Sociales. Instalar paquetes FontAwesome
  //  <FontAwesomeIcon icon={faTwitterSquare} />
  //  <FontAwesomeIcon icon={faInstagram} />

  return (
    <Navbar className={style.header_container} bg="light" expand="lg">
      <Container>
        <Navbar.Brand className={style.brand}>{PROJECT_NAME}</Navbar.Brand>
        <Nav className={style.button_access}>
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
        </Nav>
        <div className={"btn " + style.social}>
          <MetamaskConnection onAccountsChanged={props.onAccountsChanged} />
          {/* <Container>Iconos Sociales</Container> */}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
