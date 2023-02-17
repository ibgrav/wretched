import { test, expect } from "vitest";
import { renderPrefix } from "./render-prefix";

test("render prefix .", () => {
  const result = renderPrefix({ type: "app", props: {} });
  expect(result).toEqual(".");
});

test("render prefix #", () => {
  const result = renderPrefix({ type: "app", props: { id: true } });
  expect(result).toEqual("#");
});

test("render prefix *", () => {
  const result = renderPrefix({ type: "*", props: {} });
  expect(result).toEqual("");
});

test("render prefix html tag", () => {
  const result = renderPrefix({ type: "div", props: {} });
  expect(result).toEqual("");
});

test("render prefix at rule", () => {
  const result = renderPrefix({ type: "media", props: {} });
  expect(result).toEqual("@");
});
