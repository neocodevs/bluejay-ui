import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";

const ThemeProvider = ({ theme = defaultTheme, children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
