import { Col, Container, Row, Button } from "react-bootstrap";
import TeamMemberCard from "./TeamMemberCard";
import TeamData from "../../components/TeamGrid/TeamData";
import style from "./team-card.module.scss";

const TeamGrid = () => {
  const teamData = TeamData;

  return (
    <Container>
      <Row>
        {teamData.map((entry, index) => {
          return (
            <TeamMemberCard
              img={entry.img}
              name={entry.name}
              profile={entry.profile}
              key={index}
            ></TeamMemberCard>
          );
        })}
      </Row>
    </Container>
  );
};

export default TeamGrid;
