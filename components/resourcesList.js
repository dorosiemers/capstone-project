import React from "react";
import { resourcesList } from "../data/resourcesList";
import Link from "next/link";
import styled from "styled-components";

export default function ResourcesList({ item }) {
  return (
    <>
      <h3>{item.name}</h3>
      <Link href={item.link}>Homepage</Link>
      <Link href={item.tel}>Telefonnummer</Link>
    </>
  );
}

const Headline = styled.h3`
  padding: 10px;
  margin: 10px;
`;

const Links = styled.link`
  text-decoration: none;
  color: #3d2443;
`;
