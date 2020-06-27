import React from "react";
import styled from "styled-components";
import { getColor } from "../utils/colors";
import { defaultTheme } from "../Theme";
import Label from "../Label";

const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const CheckboxInput = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
`;

const CheckboxSVG = styled.svg`
  fill: ${({ theme, color }) => getColor({ theme, color })};
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

CheckboxSVG.defaultProps = {
  theme: defaultTheme,
};

const Checkbox = ({ label, name, style, color = "secondary", ...props }) => {
  return (
    <Container style={style}>
      <CheckboxInput type="checkbox" id={name} name={name} {...props} />
      <CheckboxSVG
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        onClick={props.onClick}
        color={color}
      >
        {props.checked ? (
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        ) : (
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
        )}
      </CheckboxSVG>
      <Label
        style={{ marginLeft: 5, marginBottom: 0 }}
        color={color}
        name={name}
      >
        {label}
      </Label>
    </Container>
  );
};

export default Checkbox;
