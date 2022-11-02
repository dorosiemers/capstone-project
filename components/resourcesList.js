import React from "react";
import { resourcesList } from "../data/resourcesList";
import Link from "next/link";
import styled from "styled-components";

export default function ResourcesList({ item }) {
  const telefonnummer = "tel:" + item.tel;
  return (
    <Container>
      <Headline>{item.name}</Headline>
      <Link target="_blank" href={item.link}>
        <a>
          <LinkStyle>Homepage</LinkStyle>
        </a>
      </Link>
      <Link href={telefonnummer}>
        <a>
          <LinkStyle>Telefonnummer</LinkStyle>
        </a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  cursor: default;
`;

const Headline = styled.h3`
  padding: 10px;
  margin: 10px;
`;

const LinkStyle = styled.a`
  display: flex;
  color: #3d2443;
  padding: 10px;
  margin: 10px;
`;
