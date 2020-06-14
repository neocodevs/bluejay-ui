import React from "react";
import Button from "./Button";

export default { title: "Button" };

export const withText = () => (
  <>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button>Default</Button>
  </>
);
