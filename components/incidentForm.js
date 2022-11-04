import styled from "styled-components";

function IncidentForm({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { time, location, offender, incident } = Object.fromEntries(formData);

    appendListEntry(time, location, offender, incident);
  }
  return (
    <>
      <Headline>Was ist passiert?</Headline>
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
        <InputField
          type="text"
          id="incident"
          name="incident"
          rows="7"
          required
        ></InputField>
        <button type="submit">Submit</button>
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
