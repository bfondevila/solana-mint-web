import { Col, Container, Row, Button } from "react-bootstrap";
import style from "./pay_cta.module.scss";

const PayCTA = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={2} md={4}></Col>
        <Col>
          <Button href="/">PAGAR CON PAYPAL</Button>
          <Button href="/">PAGAR CON MATIC</Button>
        </Col>
        <Col xs={2} md={4}></Col>
      </Row>
    </Container>
  );
};

export default PayCTA;
