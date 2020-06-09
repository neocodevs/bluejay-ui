import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  ${({ theme, color }) => `
  background-color: ${
    color ? (color.includes("#") ? color : theme[color]) : theme.default
  };
  color: white;
  `}
  padding: 6px 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
