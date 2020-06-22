import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";

const IconWrapper = styled.span`
  ${({ theme, color = "default" }) => `
  svg { 
    fill: ${theme.button[color].text};
    width: 1em;
  }
  display: inherit;
  margin: 0 5px;
  vertical-align: middle;
  `}
`;

IconWrapper.defaultProps = {
  theme: defaultTheme,
};

const Icon = (props) => {
  const { src: InnerIcon, color } = props;
  return (
    <IconWrapper color={color} {...props}>
      <InnerIcon />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  theme: defaultTheme,
};

export default Icon;
