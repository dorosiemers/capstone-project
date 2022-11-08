import React from "react";
import styled from "styled-components";

export default function ListEntry({
  id,
  time,
  location,
  offender,
  incident,
  handleRemove,
}) {
  return (
    <Card>
      <Headline>{location} </Headline>
      <Output>{time} </Output>
      <Output>{offender} </Output>
      <Output>{incident} </Output>
      <Button type="button" onClick={() => handleRemove(id)}>
        x
      </Button>
    </Card>
  );
}

const Card = styled.section`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  position: relative;
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
