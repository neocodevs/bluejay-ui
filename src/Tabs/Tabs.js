import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme";
import { getColor } from "../utils/colors";
import Card from "../Card";

const Tabs = (props) => {
  return <Card {...props}></Card>;
};

Tabs.defaultProps = {
  theme: defaultTheme,
};

export default Tabs;
