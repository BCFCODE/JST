import { describe } from "vitest";
import Stack from ".";
import { constructorTests } from "./tests/Constructor";
import { pushTests } from "./tests/Push";

describe(`Stack`, () => {
  constructorTests(Stack)
  pushTests(Stack)
})

