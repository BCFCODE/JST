import { describe } from "vitest";
import Stack from "./Lessons";
import { constructorTests, popTests, pushTests } from "./tests";

describe(`Stack`, () => {
  constructorTests(Stack)
  pushTests(Stack)
  popTests(Stack)
})

