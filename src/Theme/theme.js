const primary = "#19C3FC";
const secondary = "#fff";
const _default = "#9DA1A7";

const buttonsColors = {
  primary: {
    background: primary,
    text: secondary,
  },
  secondary: {
    background: secondary,
    text: "#247BC4",
  },
  default: {
    background: _default,
    text: "white",
  },
};

export const colors = {
  primary,
  secondary,
  default: _default,
};

const theme = {
  ...colors,
  button: buttonsColors,
  link: {
    ...buttonsColors,
    default: {
      text: _default,
    },
  },
  borderRadius: "10px",
};

export default theme;
