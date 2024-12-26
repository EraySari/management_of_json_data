/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

function FormVertical({ label, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
    </StyledFormRow>
  );
}

export default FormVertical;
