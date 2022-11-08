import React, { useContext } from "react";
import styled from "styled-components";
import IncidentForm from "../../components/incidentForm";
import { ListContext } from "../../context/listContext";

function IncidentPage() {
  const { incidents, setIncidents } = useContext(ListContext);
  function appendListEntry(time, location, offender, incident) {
    setIncidents((listEntry) => [
      ...listEntry,
      {
        time,
        location,
        offender,
        incident,
        id: Math.random().toString(),
      },
    ]);
  }
  return (
    <Container>
      <IncidentForm appendListEntry={appendListEntry} />
    </Container>
  );
}
export default IncidentPage;
const Container = styled.div`
  padding: 10px;
  margin: 10px;
  cursor: default;
`;
const Form = styled.form`
  display: flex;
  padding: 10px;
  margin: 10px;
`;
