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
      incidents.map((e) =>
        e.id === data.id
          ? { id: data.id, location, time, offender, incident }
          : e
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
          <Button type="button" onClick={() => handleRemove(data.id)}>
            x
          </Button>
          <SaveButton type="button" onClick={() => setIsEditable(true)}>
            Bearbeiten
          </SaveButton>
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
            <Button type="button" onClick={() => handleRemove(data.id)}>
              x
            </Button>
            <SaveButton type="button" onClick={handleSave}>
              Änderungen speichern
            </SaveButton>
          </>
        )}
      </EditCard>
    </Card>
  );
}
const Card = styled.section`
  border: solid 1px #ddd;
  position: relative;
  padding: 10px;
  margin: 10px;
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

const Headline = styled.h2`
  padding: 10px;
  margin: 10px;
`;

const Output = styled.p`
  width: 100%;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
`;

const Button = styled.button`
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
`;

const SaveButton = styled.button`
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;
