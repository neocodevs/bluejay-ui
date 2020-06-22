import styled from "styled-components";

const Text = styled.span`
  color: ${({ theme, color = "primary" }) => theme[color]};
  margin-bottom: 10px;
`;

export default Text;
