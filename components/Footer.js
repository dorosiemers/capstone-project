import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <P1>Copyright 2022</P1>
      <P2>
        „Above all, be the heroine of your life, not the victim.“ - Nora Ephron
      </P2>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  margin: 10px auto 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-top: 1px solid #ddd;
`;

const P1 = styled.p`
  margin: 10px auto 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const P2 = styled.p`
  margin: 10px auto 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
