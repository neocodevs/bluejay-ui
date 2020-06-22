import styled from "styled-components";
import { defaultTheme } from "../Theme/";

const Button = styled.button`
  ${({ theme, color = "default" }) => `  
  background-color: ${theme.button[color].background};
  color: ${theme.button[color].text};
  border-radius: ${theme.borderRadius};
  `}
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
`;

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
