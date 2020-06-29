import { useState, useEffect } from "react";

export const breakpoints = {
  MOBILE: 576,
  TABLET: 768,
  DESKTOP: 992,
  RETINA: 1200,
  RETINAM: 1400,
  RETINAL: 1600,
};

const mediaQuery = {
  MOBILE: (str, values) =>
    getMediaQuery(breakpoints.MOBILE, joinInterpolations(str, values)),
  TABLET: (str, values) =>
    getMediaQuery(breakpoints.TABLET, joinInterpolations(str, values)),
  DESKTOP: (str, values) =>
    getMediaQuery(breakpoints.DESKTOP, joinInterpolations(str, values)),
  RETINA: (str, values) =>
    getMediaQuery(breakpoints.RETINA, joinInterpolations(str, values)),
  RETINAM: (str, values) =>
    getMediaQuery(breakpoints.RETINAM, joinInterpolations(str, values)),
  RETINAL: (str, values) =>
    getMediaQuery(breakpoints.RETINAL, joinInterpolations(str, values)),
};

const joinInterpolations = (strings, ...values) =>
  strings
    .map((str, index) =>
      typeof values[index] !== "undefined" ? str + values[index] : str
    )
    .join("");

const getMediaQuery = (breakpoint, styles) =>
  `@media ${getWidth(breakpoint)} { ${styles} }`;

const getWidth = (breakpoint) => `(min-width: ${breakpoint}px)`;

const useMedia = (queries = [], values = [], defaultValue = {}) => {
  if (typeof window !== "undefined") {
    const mediaQueryLists = queries.map((q) => window.matchMedia(getWidth(q)));
    const getValue = () => {
      const index = mediaQueryLists.findIndex((mql) => mql.matches);
      return typeof values[index] !== "undefined"
        ? values[index]
        : defaultValue;
    };
    const [value, setValue] = useState(getValue);

    useEffect(() => {
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach((mql) => mql.addListener(handler));
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    }, []);
    return value;
  } else {
    return defaultValue;
  }
};

export default { breakpoints, mediaQuery, useMedia };
