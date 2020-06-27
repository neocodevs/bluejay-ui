import { getColor } from "./colors";
import { defaultTheme } from "../Theme/";

const theme = {
  primary: "orange",
  button: {
    primary: {
      background: "red",
      text: "black",
    },
  },
};

describe("regarding the colors module", () => {
  describe("regarding the getColor function", () => {
    describe("given a random color that is not in the theme", () => {
      it("should return the color passed as input", () => {
        const color = "white";

        expect(getColor({ theme, color })).toEqual("white");
      });

      describe("given no theme", () => {
        it("should return the color passed as input", () => {
          const color = "white";

          expect(getColor({ color })).toEqual("white");
        });
      });
    });

    describe("given a color name that is in the theme", () => {
      it("should return the custom theme value", () => {
        const color = "primary";

        expect(getColor({ theme, color })).toEqual(theme.primary);
      });

      describe("given no theme", () => {
        it("should return the original theme value", () => {
          const color = "primary";

          expect(getColor({ color })).toEqual(defaultTheme.primary);
        });
      });
    });

    describe("given a color name that is in the theme and a from prop", () => {
      it("should return the custom theme value", () => {
        const color = "primary";

        expect(
          getColor({
            theme,
            color,
            from: { element: "button", prop: "background" },
          })
        ).toEqual(theme.button[color].background);
        expect(
          getColor({
            theme,
            color,
            from: { element: "button", prop: "text" },
          })
        ).toEqual(theme.button[color].text);
      });

      describe("given a prop that does not exist in the theme", () => {
        it("should throw an error", () => {
          const color = "primary";

          expect(() =>
            getColor({
              theme,
              color,
              from: { element: "button", property: "text" },
            })
          ).toThrowError(
            "You have to pass a property named prop if you pass an element"
          );
        });
      });

      describe("given no theme", () => {
        it("should return the original theme value", () => {
          const color = "primary";

          expect(
            getColor({
              color,
              from: { element: "button", prop: "text" },
            })
          ).toEqual(defaultTheme.button.primary.text);
        });
      });
    });
  });
});
