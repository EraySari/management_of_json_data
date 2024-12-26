import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 0.8rem 2rem;
      margin-bottom: 2rem;
      background-color: #f5f5f7;
      border: 1px solid #e7e9e9;
      border-radius: 1.1rem;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 45rem;
    `}

    overflow: hidden;
  font-size: 1.1rem;
`;

Form.defaultProps = { type: "regular" };
export default Form;
