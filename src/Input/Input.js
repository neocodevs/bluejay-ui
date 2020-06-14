import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid #9da1a7;
  border-radius: 10px;
  color: #4b4b4b;
  background-color: transparent;
`;

const Label = styled.label`
  color: #9da1a7;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Input = (props) => {
  const { id, label, showLabel = true, placeholder } = props;

  return (
    <InputContainer>
      {showLabel && <Label htmlFor={id}>{label}</Label>}
      <StyledInput {...props} />
    </InputContainer>
  );
};

Input.defaultProps = {
  theme: defaultTheme,
};

export default Input;
