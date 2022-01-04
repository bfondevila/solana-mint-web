import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import MetamaskConnection from "../../components/MetamaskConnection";
import { mainLinks } from "../../constants/links";
import style from "./header.module.scss";

const pathMatchesEntry = (link, path) => {
  return link === path || link === path + "/";
};

const Header = (props) => {
  const router = useRouter();

  const [activeLink, setActiveLink] = useState(
    mainLinks.find(({ link }) => pathMatchesEntry(link, router.pathname)),
  );

  useEffect(() => {
    const handleChange = (url) => {
      setActiveLink(mainLinks.find(({ link }) => pathMatchesEntry(link, url)));
    };

    router.events.on("routeChangeStart", handleChange);

    return () => {
      router.events.off("routeChangeStart", handleChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{`Estrella sobre un volcán dormido ${activeLink?.name}`}</title>$
        {activeLink?.description && (
          <meta name="description" content={activeLink.description} />
        )}
      </Head>
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
              {mainLinks.map((entry) => {
                return (
                  <Link
                    href={entry.link}
                    passHref
                    key={"MainNavbarLink" + entry.key}
                  >
                    <Nav.Link
                      className={
                        pathMatchesEntry(entry.link, activeLink?.link)
                          ? "active"
                          : ""
                      }
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
    </>
  );
};

export default Header;
