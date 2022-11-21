import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { RiHomeHeartLine, RiPhoneLine } from "react-icons/ri";

export default function ResourcesList({ item }) {
  const telefonnummer = "tel:" + item.tel;
  return (
    <Container>
      <Headline3>{item.name}</Headline3>
      <Link target="_blank" href={item.link}>
        <a>
          <LinkStyle>
            <RiHomeHeartLine /> Homepage
          </LinkStyle>
        </a>
      </Link>
      <Link href={telefonnummer}>
        <a>
          <LinkStyle>
            <RiPhoneLine /> Telefonnummer
          </LinkStyle>
        </a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 13px -7px #3d2443, 13px -4px 36px 3px rgba(0, 0, 0, 0.35);
  cursor: default;
`;

const Headline3 = styled.h3`
  padding: 10px;
  margin: 10px;
`;

const LinkStyle = styled.a`
  display: flex;
  color: #f5f3f6;
  padding: 10px;
  margin: 10px;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: #584f5a;
  }
  &:active {
    color: #584f5a;
  }
`;
