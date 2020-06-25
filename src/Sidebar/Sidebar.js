import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";

const StyledSidebar = styled.div`
  ${({ theme, color = "default", open }) => `  
  background-color: ${theme.button[color].text}; 
  width: ${open ? "320px" : "73px"};
  `}
  padding: 10px;
  height: 100vh;
  position: relative;
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`;

const StyledIcon = styled.svg`
  ${({ theme, color = "default" }) => `  
    fill: ${getColor({ color, fallback: theme.button[color].background })}; 
  `}
  cursor: pointer;
`;

const ToggleIcon = styled.span`
  position: absolute;
  right: 35px;
  top: 40px;
`;

const DefaultOpenIcon = (props) => (
  <StyledIcon
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 5H5V0H0V5ZM7.5 20H12.5V15H7.5V20ZM5 20H0V15H5V20ZM0 12.5H5V7.5H0V12.5ZM12.5 12.5H7.5V7.5H12.5V12.5ZM15 0V5H20V0H15ZM12.5 5H7.5V0H12.5V5ZM15 12.5H20V7.5H15V12.5ZM20 20H15V15H20V20Z"
    />
  </StyledIcon>
);

const DefaultCloseIcon = (props) => (
  <StyledIcon
    width="25"
    height="20"
    {...props}
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 12.1431V7.85742H24.2857V12.1431H0Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 20.0001V16.4287H24.2857V20.0001H0Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 4.28571V0H24.2857V4.28571H0Z"
    />
  </StyledIcon>
);

function Sidebar(props) {
  const {
    children,
    permanent = false,
    defaultOpen = true,
    buttonColor = "default",
  } = props;

  const [open, setOpen] = useState(defaultOpen);

  return (
    <StyledSidebar {...props} open={open}>
      {!permanent && (
        <ToggleIcon onClick={() => setOpen(!open)}>
          {open ? (
            <DefaultOpenIcon color={buttonColor} />
          ) : (
            <DefaultCloseIcon color={buttonColor} />
          )}
        </ToggleIcon>
      )}
      {children}
    </StyledSidebar>
  );
}

StyledIcon.defaultProps = {
  theme: defaultTheme,
};

StyledSidebar.defaultProps = {
  theme: defaultTheme,
};

export default Sidebar;
