import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./Button";

export default { title: "Button" };

export const withText = () => (
  <ThemeProvider
    theme={{ primary: "#19C3FC", secondary: "white", default: "#9DA1A7" }}
  >
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button>Default</Button>
  </ThemeProvider>
);
