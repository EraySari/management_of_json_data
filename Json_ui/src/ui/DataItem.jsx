/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 500;

  & svg {
    height: 1.2rem;
    width: 1.2rem;
    color: #217486;
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon} <span>{label}</span>
      </Label>{" "}
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
