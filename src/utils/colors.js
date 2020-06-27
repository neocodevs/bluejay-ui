import defaultTheme from "../Theme/theme";

export const getColor = ({
  theme = defaultTheme,
  color,
  from: { element, prop } = {},
}) => {
  if (element && prop && typeof theme[element][color] !== "undefined") {
    return theme[element][color][prop];
  } else if (element && !prop) {
    throw new Error(
      "You have to pass a property named prop if you pass an element"
    );
  } else if (theme[color]) {
    return theme[color];
  } else {
    return color;
  }
};
