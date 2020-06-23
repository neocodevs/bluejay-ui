import { colors } from "../Theme/theme";

export const getColor = ({ color, fallback }) =>
  colors[color] ? fallback : color;
