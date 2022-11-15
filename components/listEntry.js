import { useState } from "react";
import styled from "styled-components";

export default function ListEntry({
  data,
  incidents,
  setIncidents,
  handleRemove,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [location, setLocation] = useState(data.location);
  const [time, setTime] = useState(data.time);
  const [offender, setOffender] = useState(data.offender);
  const [incident, setIncident] = useState(data.incident);

  function handleSave() {
    setIncidents(
      incidents.map((listEntry) =>
        listEntry.id === data.id
          ? { id: data.id, location, time, offender, incident }
          : listEntry
      )
    );
    setIsEditable(false);
  }
  return (
    <Card>
      {!isEditable && (
        <>
          <Headline>{location} </Headline>
          <Output>{time} </Output>
          <Output>{offender} </Output>
          <Output>{incident} </Output>
          <DeleteButton type="button" onClick={() => handleRemove(data.id)}>
            x
          </DeleteButton>
          <EditButton type="button" onClick={() => setIsEditable(true)}>
            Bearbeiten
          </EditButton>
        </>
      )}
      <EditCard>
        {isEditable && (
          <>
            <InputField
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <InputField
              type="date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <InputField
              type="text"
              value={offender}
              onChange={(e) => setOffender(e.target.value)}
            />
            <InputField
              type="text"
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
            />
            <DeleteButton type="button" onClick={() => handleRemove(data.id)}>
              x
            </DeleteButton>
            <SaveEditButton type="button" onClick={handleSave}>
              Änderungen speichern
            </SaveEditButton>
          </>
        )}
      </EditCard>
    </Card>
  );
}

const Card = styled.section`
  border: solid 1px #ddd;
  position: relative;
`;

const EditButton = styled.button`
  display: flex;
  margin: 20px;
  padding: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
`;

const Headline = styled.h2`
  padding: 10px;
  margin: 10px;
`;

const Output = styled.p`
  width: 100%;
  padding: 10px;
  margin: 10px;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
`;

const DeleteButton = styled.button`
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
`;

const EditCard = styled.form`
  padding: 10px;
  margin: 10px;
`;

const InputField = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
`;

const SaveEditButton = styled.button`
  margin: 10px;
  padding: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
`;
