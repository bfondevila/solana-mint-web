import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";

const FeatureCard = (props) => {
  if (props.invertCols) {
    return (
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.header}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Card.Text>{props.footer}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <img src={props.imgSrc}></img>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col>
          <img src={props.imgSrc}></img>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.header}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Card.Text>{props.footer}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
};

export default FeatureCard;
