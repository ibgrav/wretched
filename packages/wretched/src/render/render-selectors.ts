import { camelToSnakeCase } from "../camel-to-snake";
import type * as JSX from "../types";

interface RenderSelectorsProps {
  type: string;
  scope: string;
  prefix: string;
  props: JSX.Props<unknown>;
}

export function renderSelectors({ scope, props, prefix, type }: RenderSelectorsProps): string {
  let selectors = "";

  selectors += scope;

  // if has parent scope and is not marked as 'has', as in #app.has-class vs #app .child-class
  // skip for psuedo selectors and psuedo elements
  if (scope && !props.has && prefix !== ":" && prefix !== "::") selectors += " ";

  if (type === "attribute") {
    let { title, value, flag, operator } = props as JSX.AttributeSelector;
    selectors += `[${title}`;

    if (operator) selectors += operator;

    selectors += "=";

    if (value) selectors += `"${value}"`;
    if (flag) selectors += ` ${flag}`;

    selectors += "]";
  } else {
    selectors += prefix;
    selectors += camelToSnakeCase(type);
  }

  return selectors;
}
