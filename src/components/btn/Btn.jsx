import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  margin: ${({ param }) => param.margin || "0"};
  padding: ${({ param }) => param.padding || "0"};
  background-color: ${({ param }) => param.bg || "transparent"};
  background-color: ${({ param }) => param.bg || "transparent"};
  color: ${({ param }) => param.color || "black"};
  font: ${({ theme }) => theme.fonts.headingS};
  font-weight: ${({ param }) => param.fontWeight || "inherit"};
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
`;

const Btn = ({ onClick = () => {}, label = "button", ...param }) => {
  const { type, ...restParam } = param;
  return (
    <StyledButton onClick={onClick} type={type} param={restParam}>
      {label}
    </StyledButton>
  );
};

export default Btn;
