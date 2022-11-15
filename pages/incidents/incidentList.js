import styled from "styled-components";
import React, { useContext, useState } from "react";
import { ListContext } from "../../context/listContext";
import ListEntry from "../../components/listEntry";

function IncidentList() {
  const { incidents, setIncidents } = useContext(ListContext);
  function handleRemove(id) {
    const newList = incidents.filter((listEntry) => listEntry.id !== id);
    setIncidents(newList);
  }
  return (
    <Container>
      <Headline>Deine Erlebnisse</Headline>
      <Text>
        Hier findest Du eine Auflistung deiner bisher gespeicherten Erlebnisse.
        Du hast die Möglichkeit, diese zu bearbeiten oder zu löschen.
      </Text>
      <List>
        {incidents?.map((listEntry) => (
          <ListEntry
            key={listEntry.id}
            data={listEntry}
            handleRemove={handleRemove}
            incidents={incidents}
            setIncidents={setIncidents}
          ></ListEntry>
        ))}
      </List>
    </Container>
  );
}
export default IncidentList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Text = styled.p`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const List = styled.ul`
  padding: 10px;
  margin: 10px;
`;
