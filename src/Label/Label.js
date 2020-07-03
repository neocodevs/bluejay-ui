import styled from "styled-components";

export default styled.label`
  color: ${({ theme, color = "default" }) => theme[color]};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;
