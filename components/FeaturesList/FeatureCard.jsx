import { Card, Col, Row, Image } from "react-bootstrap";
import style from "./feature-card.module.scss";

const FeatureCard = (props) => {
  return (
    <Row
      className={
        style.card_container +
        " " +
        (props.invertCols
          ? style.reverse + " .white_background"
          : " .grey_background")
      }
    >
      <Col>
        <Card className={style.card_container_text}>
          <Card.Body className={style.card_body_content}>
            <Card.Title className={style.feature_card_header}>
              {props.header}
            </Card.Title>
            {typeof props.content == "string" ? (
              <Card.Text>{props.content}</Card.Text>
            ) : (
              props.content
            )}
            {typeof props.footer == "string" ? (
              <Card.Text>{props.footer}</Card.Text>
            ) : (
              props.footer
            )}
          </Card.Body>
        </Card>
      </Col>
      {props.imgSrc && (
        <Col sm={12} md={6} className={style.flex_col}>
          <Image
            className={style.feature_img + " mt-5 mt-md-0"}
            src={props.imgSrc}
            fluid
          />
        </Col>
      )}
    </Row>
  );
};

export default FeatureCard;
