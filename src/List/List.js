import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";

const List = styled.ul`
  ${({ theme, color = "default" }) => ` 
  color:  ${getColor({
    color,
    fallback: theme[color],
  })}; 
`}
  padding: 10px 0;
  list-style: none;
`;

List.defaultProps = {
  theme: defaultTheme,
};

export default List;
