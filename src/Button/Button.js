import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";
import { ContentWithIcon } from "../Icon";

const StyledButton = styled.button`
  ${({ theme, color = "default" }) => `  
  background-color: ${getColor({
    color,
    fallback: theme.button[color].background,
  })};
  color: ${getColor({
    color,
    fallback: theme.button[color].text,
  })} ;
  border-radius: ${theme.borderRadius};
  `}
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <ContentWithIcon {...props} />
    </StyledButton>
  );
};

StyledButton.defaultProps = {
  theme: defaultTheme,
};

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
