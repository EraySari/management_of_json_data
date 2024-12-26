import styled, { css } from "styled-components";

//still objesi
const sizes = {
  small: css`
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 400;
  `,
  medium: css`
    font-size: 0.8rem;
    padding: 0.4rem 0.9rem;
    font-weight: 500;
  `,
  large: css``,
};

const variations = {
  primary: css`
    color: black;
    background-color: white;
  `,
  secondary: css`
    background-color: #048c8c;
    color: #f5f5f7;
    transition: background-color 0.3s ease;
    padding: 10px 8px;
    border: none;

    &:hover {
      background-color: #016b79;
    }
  `,
  danger: css`
    color: white;
    background-color: #9f1512;

    &:hover {
      background-color: #761c15;
    }
  `,
};

// eslint-disable-next-line react/prop-types
const Button = styled.button`
  //gelen probsa göre stilden secer
  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.sizes]}

  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 10px;

  box-shadow: 0px 1px 5px #d9dcdb;
`;

Button.defaultProps = {
  variation: "primary",
  sizes: "medium",
};

export default Button;
