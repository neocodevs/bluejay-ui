import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";
import { ContentWithIcon } from "../Icon";

const StyledButton = styled.button`
  ${({ theme, color = "default" }) => `  
  background-color: ${getColor({
    theme,
    color,
    from: { element: "button", prop: "background" },
  })};
  color: ${getColor({
    theme,
    color,
    from: { element: "button", prop: "text" },
  })} ;
  border-radius: ${theme.borderRadius};
  `}
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  outline: none;
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
