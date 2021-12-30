import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";
import MetamaskConnection from "../../components/MetamaskConnection";
import style from "./header.module.scss";

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

  return (
    <Navbar
      className={style.header_container}
      bg="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand>
          <img
            src="/images/logo.png"
            width="200px"
            height="auto"
            className="center"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={style.navCentered}>
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
            <MetamaskConnection displayFullAddress={false} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
