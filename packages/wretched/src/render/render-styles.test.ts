import { test, expect } from "vitest";
import { renderStyles } from "./render-styles";

test("render styles", () => {
  const result = renderStyles({ props: { color: "red", fontFamily: "Arial" } });
  expect(result).toEqual("\n  color: red;\n  font-family: Arial;");
});
