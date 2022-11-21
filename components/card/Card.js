import styled from "styled-components";

export default function Card({ children, type = "text", ...props }) {
  return (
    <StyledCard type={type} {...props}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.section`
  position: relative;
  margin: 10px;
  padding: 10px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 13px -7px #3d2443, 13px -4px 36px 3px rgba(0, 0, 0, 0.35);
`;
