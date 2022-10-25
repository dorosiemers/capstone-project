const IncidentForm = () => {
  return (
    <div>
      <h1>Was ist passiert?</h1>
      <form>
        <label for="date">Wann?</label>
        <input type="date" id="date" name="date"></input>
        <label for="location">Wo?</label>
        <input type="text" id="location" name="location"></input>
        <label for="offender">Wer?</label>
        <input type="text" id="offender" name="offender"></input>
        <label for="incident">Was ist passiert?</label>
        <input type="text" id="incident" name="incident"></input>
      </form>
    </div>
  );
};

export default IncidentForm;
