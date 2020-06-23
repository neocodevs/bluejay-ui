import styled from "styled-components";

export default styled.label`
  color: ${({ theme, color = "primary" }) => theme[color]};
  font-size: 14px;
  margin-bottom: 10px;
  font-family: "Source Sans Pro";
`;
