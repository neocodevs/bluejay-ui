import React from "react";
import Button from "./Button";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

export default { title: "Button" };

export const withText = () => (
  <ThemeProvider>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button>Default</Button>
  </ThemeProvider>
);
