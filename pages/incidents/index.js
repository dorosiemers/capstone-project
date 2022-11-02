import styled from "styled-components";

const IncidentForm = () => {
  return (
    <div>
      <Headline>Was ist passiert?</Headline>
      <Form>
        <InputLabel for="date">Wann?</InputLabel>
        <InputField type="date" id="date" name="date"></InputField>
        <InputLabel for="location">Wo?</InputLabel>
        <InputField type="text" id="location" name="location"></InputField>
        <InputLabel for="offender">Wer?</InputLabel>
        <InputField type="text" id="offender" name="offender"></InputField>
        <InputLabel for="incident">Was ist passiert?</InputLabel>
        <InputField type="text" id="incident" name="incident"></InputField>
        <Button type="submit" id="submitIncident" name="submitIncident" />
      </Form>
    </div>
  );
};

export default IncidentForm;

const Container = styled.div`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;

const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Form = styled.section`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;

const Button = styled.input`
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
  align-items: center;
  display: flex;
  padding: 10px;
  margin: 10px;
`;
