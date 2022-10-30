import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import LogoGraphic from "../public/images/logo.svg";

const Navbar = () => {
  return (
    <div>
      <Logo>
        <Image alt="Logo" src={LogoGraphic} width={350} height={300} />
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
          <LinkText>Resources</LinkText>
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
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LinkText = styled.a`
  margin-left: 12px;
`;
