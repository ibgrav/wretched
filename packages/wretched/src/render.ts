import { HTMLTags } from "./constants";
import { isJSX } from "./jsx";
import type * as JSX from "./types";

export const renderToCSS = (element: JSX.Element) => {
  return render(element);
};

const render = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value + "";

  if (Array.isArray(value)) {
    if (isJSX(value)) {
      return jsxToCss(value);
    }

    let result = "";
    let length = value.length;

    for (let i = 0; i < length; i++) {
      result += render(value[i]);
    }

    return result;
  }

  return "";
};

const jsxToCss = ([_, type, props]: JSX.Element): string => {
  if (typeof type === "function") {
    return render(type(props));
  }

  if (HTMLTags.has(type)) {
    // is targeting an HTML element
  }

  return "";
};
