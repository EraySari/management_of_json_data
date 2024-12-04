import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 18rem 1.8fr 1fr;
  gap: 2rem;

  padding: 1.1rem 0;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
`;

/* eslint-disable react/prop-types */
function FormRow({ label, children }) {
  console.log({ children });
  return (
    <StyledFormRow>
      <Label htmlFor={children.props.id}>{label}</Label>
      {children}
    </StyledFormRow>
  );
}

export default FormRow;
