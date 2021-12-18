import { PROJECT_NAME } from "../../constants/common.js";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./header.module.scss";

const Header = () => {
  const router = useRouter();

  const links = [
    {
      key: "inicio",
      name: "Inicio",
      link: "/",
    },
    {
      key: "historia",
      name: "Historia",
      link: "/historia",
    },
    {
      key: "nft",
      name: "Venta NFT",
      link: "/nft",
    },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Head>
        <title>{PROJECT_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Navbar.Brand>
          <img
            src="/images/hero.png"
            width="30"
            height="30"
            className={"d-inline-block align-top " + style.logo}
            alt="Olivio del Toro"
          />
          {PROJECT_NAME}
        </Navbar.Brand>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
