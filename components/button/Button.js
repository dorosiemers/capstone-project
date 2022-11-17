import styled from "styled-components";

export default function Button({ children, type = "button", ...props }) {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  padding: 10px;
  margin: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  box-shadow: 13px -4px 36px 3px rgba(0, 0, 0, 0),
    0px 0px 25px 8px rgba(0, 0, 0, 0.21);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #a18ba7;
    font: #ddd;
  }
  &:focus {
    color: #584f5a;
  }
  &:active {
    color: #584f5a;
  }
`;
