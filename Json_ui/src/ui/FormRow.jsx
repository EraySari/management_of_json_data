import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 18rem 1.8fr 1fr;
  gap: 2rem;
  padding: 1.1rem 0;

  &:has(button) {
    display: flex;
    justify-content: end;
    padding-top: 5rem;
    padding-bottom: 0;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
`;

/* eslint-disable react/prop-types */
function FormRow({ label, children, errors }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {errors && <span>{errors}</span>}
    </StyledFormRow>
  );
}

export default FormRow;

//useForm kullanraka olustur. Errorlari falan isle
