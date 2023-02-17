import type * as JSX from "../types";
import { renderToString, RenderOptions } from "./render-to-string";

interface RenderChildrenProps {
  props: JSX.Props<unknown>;
  options: RenderOptions;
  selectors: string;
}

export function renderChildren({ props, options, selectors }: RenderChildrenProps): string {
  let children = "";

  if (props.children) {
    children = renderToString(props.children, options, selectors);
  }

  return children;
}
