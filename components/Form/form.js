import styled from "styled-components";

export default function Form({ children, type = "form", ...props }) {
  return (
    <StyledForm type={type} {...props}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 13px -7px #3d2443, 13px -4px 36px 3px rgba(0, 0, 0, 0.35);
`;
