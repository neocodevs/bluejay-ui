import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";
import { ContentWithIcon } from "../Icon";

const StyledListItem = styled.li`
  ${({ theme, color = "default" }) => ` 
    color:  ${getColor({
      color,
      fallback: theme[color],
    })}; 
  `}
  font-family: "Source Sans Pro";
  padding: 10px 16px;
  display: flex;
`;

const CustomContentWithIcon = styled(ContentWithIcon)`
  span {
    min-width: 56px;
    margin: 0 16px;
  }
`;

const ListItem = (props) => (
  <StyledListItem {...props}>
    <CustomContentWithIcon {...props} />
  </StyledListItem>
);

StyledListItem.defaultProps = {
  theme: defaultTheme,
};

export default ListItem;
