// import React from "react";
// import styled from "styled-components";
// import IncidentList from "./incidentList";
// import { useState, useContext } from "react";
// import { ListContext } from "../../context/listContext";
// import Link from "next/link";

// function EditForm({ currentIncident, onEditInputChange, onEditFormSubmit }) {
//   const { incidents, setIncidents } = useContext(ListContext);
//   const EditButton = React.forwardRef(({ href }, ref) => {
//     return (
//       <a href={href} ref={ref}>
//         Änderungen speichern
//       </a>
//     );
//   });
//   return (
//     <>
//       <Headline>Was ist passiert?</Headline>
//       <Form onSubmit={onEditFormSubmit}>
//         <InputLabel htmlfor="updateTime">Wann? bearbeiten</InputLabel>
//         <InputField
//           type="date"
//           id="updateTime"
//           name="updateTime"
//           placeholder="Wann? bearbeiten"
//           value={currentIncident?.date}
//           onChange={onEditInputChange}
//           rows="2"
//           maxLength="240"
//         ></InputField>
//         <InputLabel htmlfor="updateLocation">Wo? bearbeiten</InputLabel>
//         <InputField
//           type="text"
//           id="updateLocation"
//           name="updateLocation"
//           placeholder="Wo? bearbeiten"
//           value={currentIncident?.text}
//           onChange={onEditInputChange}
//           rows="2"
//           maxLength="240"
//           required
//         ></InputField>
//         <InputLabel htmlfor="updateOffender">Wer? bearbeiten</InputLabel>
//         <InputField
//           type="text"
//           id="updateOffender"
//           name="updateOffender"
//           placeholder="Wer? bearbeiten"
//           value={currentIncident?.text}
//           onChange={onEditInputChange}
//           rows="2"
//           maxLength="240"
//         ></InputField>
//         <InputLabel htmlfor="updateIncident">
//           Was ist passiert? bearbeiten
//         </InputLabel>
//         <InputField
//           type="text"
//           id="updateIncident"
//           name="updateIncident"
//           placeholder="Was ist passiert? bearbeiten"
//           value={currentIncident?.text}
//           onChange={onEditInputChange}
//           rows="7"
//           required
//         ></InputField>
//         <Link href="/incidents/incidentList" passHref legacyBehavior>
//           <EditButton onClick={onEditFormSubmit} />
//         </Link>
//       </Form>
//     </>
//   );
// }

// export default EditForm;

// const Headline = styled.h1`
//   text-align: center;
//   padding: 10px;
//   margin: 10px;
// `;

// const Form = styled.form`
//   border: solid 1px #ddd;
//   padding: 10px;
//   margin: 10px;
// `;

// const Button = styled.button`
//   display: flex;
//   padding: 10px;
//   margin: 10px;
//   color: #ddd;
//   font-family: "Noto Sans", sans-serif;
//   color: #a18ba7;
//   cursor: pointer;
// `;

// const InputLabel = styled.label`
//   padding: 10px;
//   margin: 10px;
// `;

// const InputField = styled.input`
//   display: flex;
//   padding: 10px;
//   margin: 10px;
// `;
