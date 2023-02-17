import { test, expect } from "vitest";
import { h } from "../jsx";
import { renderChildren } from "./render-children";

const children = [h("app", { color: "red" })];

test("render children selectors", () => {
  const result = renderChildren({ selectors: "body", props: { children } });
  expect(result).toEqual("body .app {\n  color: red;\n}\n\n");
});

test("render children no selectors", () => {
  const result = renderChildren({ selectors: "", props: { children } });
  expect(result).toEqual(".app {\n  color: red;\n}\n\n");
});
