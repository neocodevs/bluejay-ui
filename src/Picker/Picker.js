import React, { useState, useRef } from "react";
import styled from "styled-components";
import Input from "../Input";
import useOnClickOutside from "../utils/hooks/useOnClickOutside";

const Container = styled.div`
  position: relative;
`;

const PickerContainer = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 0 3px 11px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const Picker = ({ Input: CustomInput = Input, value, children, ...props }) => {
  const ref = useRef();
  const [showPicker, setShowPicker] = useState(false);
  useOnClickOutside(ref, () => setShowPicker(false));

  return (
    <Container ref={ref}>
      <CustomInput value={value} onFocus={() => setShowPicker(true)} />
      {showPicker && <PickerContainer {...props}>{children}</PickerContainer>}
    </Container>
  );
};

export default Picker;
