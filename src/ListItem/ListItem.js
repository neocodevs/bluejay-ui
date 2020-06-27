import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import { getColor } from "../utils/colors";
import { ContentWithIcon } from "../Icon";

const StyledListItem = styled.li`
  ${({ theme, color = "default" }) => ` 
    color:  ${getColor({
      theme,
      color,
    })}; 
  `}
  padding: 10px;
  display: flex;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const CustomContentWithIcon = styled(ContentWithIcon)`
  span {
    min-width: 56px;
    margin: 0 12px;
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
