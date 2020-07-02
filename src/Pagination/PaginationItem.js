import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";

const StyledPaginationItem = styled.button`
  ${({ theme, activeItem }) => {
    const activeClass = activeItem ? "active" : "default";
    return `  
  background-color: ${getColor({
    theme,
    color: activeClass,
    from: { element: "pagination", prop: "background" },
  })};
  color: ${getColor({
    theme,
    color: activeClass,
    from: { element: "pagination", prop: "text" },
  })} ;
  border-radius: ${theme.borderRadius};
  `;
  }}
  text-transform: uppercase;
  outline: none;
  padding: 8px;
  min-width: 32px;
  border: 1px solid ${({ theme }) => theme.default};
  cursor: pointer;
  margin: 0 5px;
`;

const PaginationItem = ({ children, ...props }) => (
  <StyledPaginationItem {...props}>{children}</StyledPaginationItem>
);

StyledPaginationItem.defaultProps = {
  theme: defaultTheme,
};

PaginationItem.defaultProps = {
  theme: defaultTheme,
};

export default PaginationItem;
