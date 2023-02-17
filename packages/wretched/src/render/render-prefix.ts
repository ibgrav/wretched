import type * as JSX from "../types";
import { AT_RULES, GLOBAL_SELECTORS, PSEUDO_CLASSES, PSEUDO_ELEMENTS } from "../constants";

interface RenderPrefixProps {
  type: string;
  props: JSX.Props<unknown>;
}

export function renderPrefix({ type, props }: RenderPrefixProps): string {
  // it is assumed all non-known values are classes
  let prefix = ".";

  // allow overwrite for id selector
  if (props.id) prefix = "#";
  // allow overwrite for class selector
  else if (props.cls) prefix = ".";
  else if (AT_RULES.has(type)) prefix = "@";
  else if (PSEUDO_CLASSES.has(type)) prefix = ":";
  else if (PSEUDO_ELEMENTS.has(type)) prefix = "::";
  else if (GLOBAL_SELECTORS.has(type)) prefix = "";

  return prefix;
}
