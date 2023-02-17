import { isJSX } from "../jsx";
import { renderPrefix } from "./render-prefix";
import { renderStyles } from "./render-styles";
import { renderChildren } from "./render-children";
import { renderSelectors } from "./render-selectors";

export function renderToString(item: unknown, scope: string = ""): string {
  if (Array.isArray(item)) {
    if (isJSX(item)) {
      let [, type, props] = item;

      if (typeof type === "function") {
        return renderToString(type(props), scope);
      }

      if (typeof type === "string") {
        console.log(item);

        // special types that are not JSX-safe
        if (type === "star") type = "*";

        let styles = renderStyles({ props });
        let prefix = renderPrefix({ type, props });
        let selectors = renderSelectors({ scope, prefix, type, props });
        let children = renderChildren({ props, selectors });

        return `${selectors} {${styles}\n}\n\n${children}`;
      }

      return "";
    }

    return item.reduce((p, n) => p + renderToString(n, scope), "");
  }

  return "";
}
