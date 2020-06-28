import styled from "styled-components";
import { defaultTheme } from "../Theme";
import { getColor } from "../utils/colors";

const Card = styled.div`
  ${({ theme, color = "white" }) => `  
  border-radius: ${theme.borderRadius};
  background-color: ${getColor({
    theme,
    color,
    from: { element: "button", prop: "background" },
  })};
  `}
  padding: 10px 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
