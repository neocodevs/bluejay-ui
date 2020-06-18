import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "./lib/index.js",
    format: "cjs",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
  external: ["react", "react-dom", "styled-components"],
};
