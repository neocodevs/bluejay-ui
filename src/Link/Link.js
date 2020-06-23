import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";

const StyledLink = styled.a`
  ${({ theme, color = "default" }) => `  
  color: ${theme.link[color].text};
  `}
  padding: 10px 16px;
  cursor: pointer;
  font-family: "Source Sans Pro";
`;

const Link = React.forwardRef((props, ref) => (
  <StyledLink ref={ref} {...props} />
));

StyledLink.defaultProps = {
  theme: defaultTheme,
};

export default Link;
