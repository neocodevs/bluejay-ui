import React from "react";
import { getColor } from "../utils/colors";
import Icon from "../Icon/Icon";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ContentWithIcon = ({
  icon,
  children,
  iconPosition = "start",
  color = "default",
  theme,
  ...props
}) => {
  if (!icon) {
    return children;
  }

  const IconStyled = () => (
    <Icon
      iconSrc={icon}
      color={getColor({
        theme,
        color,
        from: { element: "button", prop: "text" },
      })}
    />
  );

  return iconPosition === "start" ? (
    <ContentWrapper {...props}>
      <IconStyled /> {children}
    </ContentWrapper>
  ) : (
    <ContentWrapper {...props}>
      {children} <IconStyled />
    </ContentWrapper>
  );
};

ContentWithIcon.defaultProps = {
  theme: defaultTheme,
};

export default ContentWithIcon;
