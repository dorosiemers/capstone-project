import styled from "styled-components";
import ListEntry from "../../components/listEntry";
import { useIncidents } from "../../context/listContext";

function IncidentList() {
  const incidents = useIncidents().incidents;
  return (
    <Container>
      <Headline>Deine Erlebnisse</Headline>
      <List>
        {incidents?.map((listEntry) => (
          <ListEntry
            key={listEntry.id}
            time={listEntry.time}
            location={listEntry.location}
            offender={listEntry.offender}
            incident={listEntry.incident}
          />
        ))}
      </List>
    </Container>
  );
}

export default IncidentList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const List = styled.ul`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;
