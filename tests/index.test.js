import { describe, expect, test } from "@jest/globals";
import hello from "./../src/index.js";

test("Function return true", () => {
  expect(hello()).toBeTruthy();
});
