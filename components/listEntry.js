import React from "react";
import styled from "styled-components";

export default function ListEntry({ time, location, offender, incident }) {
  return (
    <Card>
      <Headline>{location} </Headline>
      <Output>{time} </Output>
      <Output>{offender} </Output>
      <Output>{incident} </Output>
    </Card>
  );
}

const Card = styled.section`
  border: solid 1px #ddd;
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
