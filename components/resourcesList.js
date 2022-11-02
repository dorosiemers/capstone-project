import React from "react";
import { resourcesList } from "../data/resourcesList";
import Link from "next/link";
import styled from "styled-components";

export default function ResourcesList({ item }) {
  const telefonnummer = "tel:" + item.tel;
  return (
    <div>
      <Headline>{item.name}</Headline>
      <Link target="_blank" href={item.link}>
        <a>Homepage</a>
      </Link>
      <Link href={telefonnummer}>
        <a>Telefonnummer</a>
      </Link>
    </div>
  );
}

const Headline = styled.h3`
  padding: 10px;
  margin: 10px;
`;
