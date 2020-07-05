import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";
import { ContentWithIcon } from "../Icon";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  outline: none;

  ${({ theme, color = "default", rounded = false }) => `  
  background-color: ${getColor({
    theme,
    color,
    from: { element: "button", prop: "background" },
  })};
  color: ${getColor({
    theme,
    color,
    from: { element: "button", prop: "text" },
  })};
  border-radius: ${theme.borderRadius};

    ${
      rounded
        ? `
          width: 50px;
          height: 50px;
          padding: 0;
          border-radius: 50%;

          span {
            margin: 0;
            width: 25px;
            height: 25px;
            box-shadow: none;
          }`
        : ""
    }
  `}
`;

const Button = ({ style, ...props }) => {
  return (
    <StyledButton style={style} {...props}>
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
