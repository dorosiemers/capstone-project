import React from "react";
import { resourcesList } from "../data/resourcesList";
import Link from "next/link";
import styled from "styled-components";

export default function ResourcesList({ item }) {
  return (
    <div>
      <Headline>{item.name}</Headline>
      <Link href={item.link}>
        <LinkStyle target="_blank">Homepage</LinkStyle>
      </Link>
      <Link href="tel:{item.tel}">
        <LinkStyle>Telefonnummer</LinkStyle>
      </Link>
    </div>
  );
}

const Headline = styled.h3`
  padding: 10px;
  margin: 10px;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: #3d2443;
  padding: 10px;
  margin: 10px;
`;
