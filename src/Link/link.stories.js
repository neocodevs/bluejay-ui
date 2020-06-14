import React from "react";
import Link from "./Link";

export default { title: "Link" };

export const withText = () => (
  <>
    <Link color="primary">Primary</Link>
    <Link color="secondary">Secondary</Link>
    <Link>Default</Link>
  </>
);
