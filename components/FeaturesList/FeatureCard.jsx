import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import style from "./feature-card.module.scss";

const FeatureCard = (props) => {
  return (
    <Row
      className={
        style.card_container +
        " " +
        (props.invertCols
          ? style.reverse + " .white_background"
          : ".grey_background")
      }
    >
      <Col>
        <Card className={style.card_container_text}>
          <Card.Body>
            <Card.Title>{props.header}</Card.Title>
            <Card.Text>{props.content}</Card.Text>
            <Card.Text>{props.footer}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <img src={props.imgSrc}/>
      </Col>
    </Row>
  );
};

export default FeatureCard;