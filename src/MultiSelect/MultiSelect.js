import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import Label from "../Label";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MultiSelect = (props) => {
  const { id, label, showLabel = true, Label: CustomLabel = Label } = props;

  return (
    <InputContainer>
      {showLabel && label && <CustomLabel htmlFor={id}>{label}</CustomLabel>}
      <CreatableSelect {...props} />
    </InputContainer>
  );
};

export default MultiSelect;
