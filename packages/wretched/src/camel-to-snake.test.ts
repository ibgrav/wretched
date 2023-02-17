import { test, expect } from "vitest";
import { camelToSnakeCase } from "./camel-to-snake";

test("camel to snake case", () => {
  const result = camelToSnakeCase("TestOneTwoThree");
  expect(result).toEqual("test-one-two-three");
});
