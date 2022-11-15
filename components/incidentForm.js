import styled from "styled-components";
import { useRouter } from "next/router";

function IncidentForm({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { time, location, offender, incident } = Object.fromEntries(formData);

    appendListEntry(time, location, offender, incident);
  }

  const router = useRouter();

  return (
    <>
      <Headline>Was ist passiert?</Headline>
      <Text>
        Hier ist Platz deine Erlebnisse aufzuschreiben. Deine gespeicherten
        Erlebnisse findest du dann unter Vorfälle.
      </Text>
      <Form onSubmit={sendForm}>
        <InputLabel htmlfor="time">Wann?</InputLabel>
        <InputField
          type="date"
          id="time"
          name="time"
          rows="2"
          maxLength="240"
        ></InputField>
        <InputLabel htmlfor="location">Wo?</InputLabel>
        <InputField
          type="text"
          id="location"
          name="location"
          rows="2"
          maxLength="240"
          required
        ></InputField>
        <InputLabel htmlfor="offender">Wer?</InputLabel>
        <InputField
          type="text"
          id="offender"
          name="offender"
          rows="2"
          maxLength="240"
        ></InputField>
        <InputLabel htmlfor="incident">Was ist passiert?</InputLabel>
        <InputTextfield
          type="text"
          id="incident"
          name="incident"
          rows="7"
          required
        ></InputTextfield>
        <Button
          type="submit"
          onClick={() => router.push("/incidents/incidentList")}
        >
          Speichern
        </Button>
      </Form>
    </>
  );
}

export default IncidentForm;

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

const Form = styled.form`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
  margin: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
`;

const InputLabel = styled.label`
  padding: 10px;
  margin: 10px;
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
