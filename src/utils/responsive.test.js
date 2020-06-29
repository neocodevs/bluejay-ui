import responsive from "./responsive";

const { mediaQuery } = responsive;

describe("regarding the responsive module", () => {
  describe("regarding the mediaQuery function", () => {
    describe("given an empty template literal", () => {
      it("should return the correct string", () => {
        expect(mediaQuery.TABLET``).toEqual("@media (min-width: 768px) {  }");
      });
    });

    describe("given a nested template literal", () => {
      it("should return the correct string", () => {
        expect(mediaQuery.TABLET`
          width: ${1 + 1};
        `).toEqual(`@media (min-width: 768px) { 
          width: 2;
         }`);
      });
    });
  });
});
