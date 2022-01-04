import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import SocialLinks from "../../components/Social";
import { mainLinks, otherLinks } from "../../constants/links";
import style from "./footer.module.scss";

const Footer = () => {
  const footerLinks = [
    ...mainLinks.filter((entry) => entry.key !== "home"),
    ...otherLinks.filter((entry) => entry.key == "aviso_legal"),
  ];

  return (
    <footer className={"black_background " + style.footer}>
      <div className={style.footer_container}>
        <Col xs={12} className={`${style.title} mb-4`}>
          <p className={"text-center " + style.title}>
            made with love for La Palma
          </p>
        </Col>
        <Row className={`${style.footerLinkWrap} px-2`}>
          {footerLinks.map((entry, index) => {
            return (
              <Col
                xs={12}
                sm={6}
                className={`text-center ${
                  index % 2 == 0 ? "text-sm-start" : "text-sm-end"
                }`}
              >
                <Link href={entry.link}>
                  <a className={`link mx-sm-5 ${style.footerLink}`}>
                    {entry.name ?? entry.key}
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
        <Col xs={12} className={"my-3 text-center"}>
          <SocialLinks inverted />
        </Col>
      </div>
    </footer>
  );
};

export default Footer;
