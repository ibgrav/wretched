import { isJSX } from "../jsx";
import { renderPrefix } from "./render-prefix";
import { renderStyles } from "./render-styles";
import { renderChildren } from "./render-children";
import { renderSelectors } from "./render-selectors";

export interface RenderOptions {
  minify?: boolean;
}

export function renderToString(item: unknown, options: RenderOptions = {}, scope: string = ""): string {
  if (Array.isArray(item)) {
    if (isJSX(item)) {
      let [, type, props] = item;

      if (typeof type === "function") {
        return renderToString(type(props), options, scope);
      }

      if (typeof type === "string") {
        console.log(item);

        // special types that are not JSX-safe
        if (type === "star") type = "*";

        let styles = renderStyles({ props, options });
        let prefix = renderPrefix({ type, props });
        let selectors = renderSelectors({ scope, prefix, type, props });
        let children = renderChildren({ props, options, selectors });

        // if there are no style props, avoid rendering an empty style declaration
        if (!styles) return children;

        if (options.minify) return `${selectors}{${styles}}${children}`;
        return `${selectors} {${styles}\n}\n\n${children}`;
      }

      return "";
    }

    return item.reduce((p, n) => p + renderToString(n, options, scope), "");
  }

  return "";
}
