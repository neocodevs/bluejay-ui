import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import Icon from "../Icons/index";

const StyledButton = styled.button`
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

const ContentWrapper = styled.span`
  display: inherit;
`;

const getIconPosition = ({
  icon,
  children,
  iconPosition = "start",
  color,
  props,
}) => {
  const IconStyled = () => <Icon src={icon} color={color} />;

  return iconPosition === "start" ? (
    <ContentWrapper>
      <IconStyled /> {children}
    </ContentWrapper>
  ) : (
    <ContentWrapper>
      {children} <IconStyled />
    </ContentWrapper>
  );
};

const Button = (props) => {
  const { icon, children } = props;
  const buttonContent = icon
    ? getIconPosition({ icon, children, ...props })
    : children;

  return <StyledButton {...props}>{buttonContent}</StyledButton>;
};

StyledButton.defaultProps = {
  theme: defaultTheme,
};

export default Button;
