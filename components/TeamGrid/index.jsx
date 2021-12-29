import { Container, Row } from "react-bootstrap";
import TeamData from "../../components/TeamGrid/TeamData";
import TeamMemberCard from "./TeamMemberCard";

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
