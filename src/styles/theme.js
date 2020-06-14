const primary = "#19C3FC";
const secondary = "#fff";
const _default = "#9DA1A7";

const defaultTheme = {
  primary,
  secondary,
  default: _default,
  button: {
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
  },
};

export default defaultTheme;
