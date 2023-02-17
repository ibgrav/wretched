import { test, expect } from "vitest";
import { h, Fragment } from "../jsx";
import { Element } from "../types";
import { renderToString } from "./render-to-string";

test("render to styles fragment", () => {
  const result = renderToString(
    Fragment({ children: [h("one", { color: "red" }), h("two", { color: "red" })] }) as Element
  );
  expect(result).toEqual(".one {\n  color: red;\n}\n\n.two {\n  color: red;\n}\n\n");
});

test("render styles kitchen sink", () => {
  const result = renderToString(h("main", { id: true, color: "red", children: [h("app", { margin: 0 })] }));

  expect(result).toEqual(`#main {
  color: red;
}

#main .app {
  margin: 0;
}

`);
});
