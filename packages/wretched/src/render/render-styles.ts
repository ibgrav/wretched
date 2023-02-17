import { camelToSnakeCase } from "../camel-to-snake";
import type * as JSX from "../types";

interface RenderStylesProps {
  props: JSX.Props<unknown>;
}

export function renderStyles({ props }: RenderStylesProps): string {
  let styles = "";

  Object.entries(props).forEach(([key, val]) => {
    if (typeof val === "string" || typeof val === "number") {
      styles += `\n  ${camelToSnakeCase(key)}: ${val};`;
    }
  });

  return styles;
}
