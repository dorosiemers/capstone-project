import styled from "styled-components";

const IncidentForm = () => {
  return (
    <div>
      <Headline>Was ist passiert?</Headline>
      <Form>
        <label for="date">Wann?</label>
        <input type="date" id="date" name="date"></input>
        <label for="location">Wo?</label>
        <input type="text" id="location" name="location"></input>
        <label for="offender">Wer?</label>
        <input type="text" id="offender" name="offender"></input>
        <label for="incident">Was ist passiert?</label>
        <input type="text" id="incident" name="incident"></input>
      </Form>
    </div>
  );
};

export default IncidentForm;

const Container = styled.div`
  text-align: center;
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
  text-align: center;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;
