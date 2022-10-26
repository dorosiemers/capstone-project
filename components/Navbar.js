import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <Logo>
        <Image alt="Logo" src="/logo.svg" width={500} height={250} />
      </Logo>
      <Nav>
        <Link href="/">
          <LinkText>Home</LinkText>
        </Link>
        <Link href="/incidents">
          <LinkText>Input</LinkText>
        </Link>
        <Link href="/incidents/incidentList">
          <LinkText>List</LinkText>
        </Link>
        <Link href="/resources">
          <LinkText>Ressources</LinkText>
        </Link>
      </Nav>
    </div>
  );
};

export default Navbar;

const Nav = styled.nav`
  margin: 10px auto 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LinkText = styled.a`
  margin-left: 12px;
`;
