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

const theme = {
  primary,
  secondary,
  default: _default,
  button: buttonsColors,
  link: {
    ...buttonsColors,
    default: {
      text: _default,
    },
  },
  borderRadius: 10
};

export default theme;
