import type * as JSX from "../types";
import { renderToString } from "./render-to-string";

interface RenderChildrenProps {
  props: JSX.Props<unknown>;
  selectors: string;
}

export function renderChildren({ props, selectors }: RenderChildrenProps): string {
  let children = "";

  if (props.children) {
    children = renderToString(props.children, selectors);
  }

  return children;
}
