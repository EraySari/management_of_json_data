/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledDiv = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;

  gap: 0.9rem;

  & p {
    font-size: 15px;
    margin-bottom: 10px;
    color: gray;
  }

  & div {
    display: flex;
    justify-content: end;
    gap: 1.2rem;
  }
`;

// eslint-disable-next-line no-unused-vars
function LogoutModal({ name, onConfirm, onCloseModal, disabled }) {
  return (
    <StyledDiv>
      <Heading as="h3">Logout</Heading>
      <p>Hey {name}. Are you sure you really want to log out?</p>
      <div>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Logout
        </Button>
      </div>
    </StyledDiv>
  );
}

export default LogoutModal;
