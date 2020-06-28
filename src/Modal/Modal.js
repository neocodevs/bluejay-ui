import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Label from "../Label";

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
`;

const Blur = styled(Container)`
  background-color: white;
  backdrop-filter: blur(10px);
  opacity: 0.6;
  z-index: 90;
`;

const Modal = ({ Title: CustomTitle = Label, title, children, ...props }) => {
  return (
    <>
      <Container {...props}>
        <Card>
          {title && (
            <CustomTitle as="p" style={{ marginBottom: 40 }}>
              {title}
            </CustomTitle>
          )} 
          {children}
        </Card>
      </Container>
      <Blur />
    </>
  );
};

export default Modal;
