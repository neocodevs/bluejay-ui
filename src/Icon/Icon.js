import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";

const IconWrapper = styled.span`
  ${({ theme, color = "default" }) => `
  svg { 
    fill: ${getColor({
      theme,
      color,
    })};
    width: 25px;
    height: 25px;
  }
  
  margin: 0 16px;
  `}
`;

IconWrapper.defaultProps = {
  theme: defaultTheme,
};

const Icon = (props) => {
  const { iconSrc: InnerIcon, color } = props;
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
