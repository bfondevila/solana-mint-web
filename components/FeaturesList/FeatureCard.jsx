import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";

const FeatureCard = (props) => {
  const header = props.header;
  const content = props.content;
  const footer = props.footer;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.header}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.footer}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
