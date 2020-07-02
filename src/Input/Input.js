import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import Label from "../Label";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-color: red;
  color: #4b4b4b;
  background-color: transparent;
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Input = (props) => {
  const { id, label, showLabel = true, Label: CustomLabel = Label } = props;

  return (
    <InputContainer>
      {showLabel && label && <CustomLabel htmlFor={id}>{label}</CustomLabel>}
      <StyledInput {...props} />
    </InputContainer>
  );
};

StyledInput.defaultProps = {
  theme: defaultTheme,
};

export default Input;
