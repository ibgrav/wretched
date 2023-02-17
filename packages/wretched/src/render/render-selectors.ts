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
  if (scope && !props.has) selectors += " ";

  selectors += prefix;

  selectors += camelToSnakeCase(type);

  return selectors;
}
