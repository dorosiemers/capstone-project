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
      <List>
        {incidents?.map((listEntry) => (
          <ListEntry
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
const Button = styled.button`
  z-index: 2;
`;
