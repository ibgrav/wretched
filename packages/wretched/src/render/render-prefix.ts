import type * as JSX from "../types";
import { AT_RULES, HTML_TAGS } from "../constants";

interface RenderPrefixProps {
  type: string;
  props: JSX.Props<unknown>;
}

export function renderPrefix({ type, props }: RenderPrefixProps): string {
  let prefix = ".";

  if (props.id) prefix = "#";
  else if (AT_RULES.has(type)) prefix = "@";
  else if (HTML_TAGS.has(type) || type === "*") prefix = "";

  return prefix;
}
