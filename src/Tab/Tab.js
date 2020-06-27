import styled from "styled-components";
import { defaultTheme } from "../Theme";
import Button from "../Button";

const Tab = styled(Button)`
  background-color: white;
`;

Tab.defaultProps = {
  theme: defaultTheme,
};

export default Tab;
