import { Col, Container, Row, Button, Card } from "react-bootstrap";
import style from "./team-card.module.scss";

const TeamMemberCard = (props) => {
  return (
    <Col xs="6" md="3" className={style.team_grid_cell}>
      <Card className={style.gold_card + " " + style.card}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className={style.card_body}>
          <Card.Title className={style.team_card_text + " " + style.team_card_title}>
            {props.name}
          </Card.Title>
          <Card.Text className={style.team_card_text}>
            {props.profile}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamMemberCard;
