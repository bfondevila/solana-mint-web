import { PROJECT_NAME } from "../../constants/common.js";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import MetamaskConnection from "../../components/MetamaskConnection";

import style from "./header.module.scss";
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
    <Navbar className={style.header_container} bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <img
            src="/images/logo.png"
            width="200p"
            height="auto"
            className="center"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
