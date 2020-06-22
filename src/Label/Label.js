import styled from "styled-components";

export default styled.label`
  color: ${({ theme, color = "primary" }) => theme[color]};
  margin-bottom: 10px;
`;
