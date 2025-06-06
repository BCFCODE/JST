import { describe } from "vitest";
import Stack from "./Lessons";
import { constructorTests } from "./tests/Constructor";
import { pushTests } from "./tests/Push";

describe(`Stack`, () => {
  constructorTests(Stack)
  pushTests(Stack)
})

