import { camelToSnakeCase } from "../camel-to-snake";
import { INTERNAL_PROPS } from "../constants";
import type * as JSX from "../types";
import { RenderOptions } from "./render-to-string";

interface RenderStylesProps {
  props: JSX.Props<unknown>;
  options: RenderOptions;
}

export function renderStyles({ props, options }: RenderStylesProps): string {
  let styles = "";

  Object.entries(props).forEach(([key, val]) => {
    if ((typeof val === "string" || typeof val === "number") && !INTERNAL_PROPS.has(key)) {
      if (options.minify) styles += `${camelToSnakeCase(key)}:${val};`;
      else styles += `\n  ${camelToSnakeCase(key)}: ${val};`;
    }
  });

  return styles;
}
