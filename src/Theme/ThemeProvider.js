import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./theme";

const CustomThemeProvider = ({ theme = {}, children }) => {
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
