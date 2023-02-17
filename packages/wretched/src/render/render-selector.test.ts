import { test, expect } from "vitest";
import { renderSelectors } from "./render-selectors";

test("render selectors simple", () => {
  const result = renderSelectors({ scope: "", type: "app", prefix: "", props: {} });
  expect(result).toEqual("app");
});
