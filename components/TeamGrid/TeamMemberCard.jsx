import { Col, Container, Row, Button, Card } from "react-bootstrap";

const TeamMemberCard = (props) => {

    return (
        <Col xs="6" md="3">
          <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.profile}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default TeamMemberCard;
