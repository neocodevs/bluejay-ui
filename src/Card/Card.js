import styled from "styled-components";
import { defaultTheme } from "../Theme";
import { getColor } from "../utils/colors";

const Card = styled.div`
  ${({ theme, color = "white" }) => `  
  background-color: ${getColor({
    theme,
    color,
    from: { element: "button", prop: "background" },
  })};
  `}
  padding: 10px 15px;
`;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
