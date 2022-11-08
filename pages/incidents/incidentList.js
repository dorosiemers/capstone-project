import styled from "styled-components";
import React, { useContext } from "react";
import { ListContext } from "../../context/listContext";
import ListEntry from "../../components/listEntry";
function IncidentList() {
  const { incidents, setIncidents } = useContext(ListContext);
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
  padding: 10px;
  margin: 10px;
`;
const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;
const List = styled.ul`
  padding: 10px;
  margin: 10px;
`;
