import { useState } from "react";
import styled from "styled-components";
import Button from "./button/Button";
import Form from "./form/Form";
import { RiDeleteBin2Line, RiEditLine, RiSave3Fill } from "react-icons/ri";

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
    <Container>
      {!isEditable && (
        <Card>
          <Headline2>{location} </Headline2>
          <Output>{time} </Output>
          <Output>{offender} </Output>
          <Output>{incident} </Output>
          <DeleteButton type="button" onClick={() => handleRemove(data.id)}>
            <RiDeleteBin2Line />
          </DeleteButton>
          <EditButton type="button" onClick={() => setIsEditable(true)}>
            Bearbeiten <RiEditLine />
          </EditButton>
        </Card>
      )}
      <Form>
        {isEditable && (
          <>
            <InputField
              type="date"
              rows="2"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <InputField
              type="text"
              rows="2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <InputField
              type="text"
              rows="2"
              value={offender}
              onChange={(e) => setOffender(e.target.value)}
            />
            <InputTextfield
              type="text"
              rows="7"
              required
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
            />
            <DeleteButton type="button" onClick={() => handleRemove(data.id)}>
              <RiDeleteBin2Line />
            </DeleteButton>
            <Button type="button" onClick={handleSave}>
              Änderungen speichern <RiSave3Fill />
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  cursor: default;
`;

const Card = styled.section`
  position: relative;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 13px -7px #3d2443, 13px -4px 36px 3px rgba(0, 0, 0, 0.35);
`;

const EditButton = styled.button`
  display: flex;
  margin: 20px;
  padding: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  text-shadow: 1px 1px #f5f3f6;
  box-shadow: 13px -4px 36px 3px rgba(0, 0, 0, 0),
    0px 0px 25px 8px rgba(0, 0, 0, 0.21);
`;

const Headline2 = styled.h2`
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

const DeleteButton = styled(Button)`
  z-index: 2;
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  text-shadow: 1px 1px #f5f3f6;
  box-shadow: 13px -4px 36px 3px rgba(0, 0, 0, 0),
    0px 0px 25px 8px rgba(0, 0, 0, 0.21);
`;

const EditCard = styled.form`
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 13px -7px #3d2443, 13px -4px 36px 3px rgba(0, 0, 0, 0.35);
`;

const InputField = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
`;

const InputTextfield = styled.textarea`
  display: flex;
  padding: 10px;
  margin: 10px;
`;
