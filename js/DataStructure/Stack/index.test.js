import { describe } from "vitest";
import { constructorTests } from "./tests/Constructor";
import { pushTests } from "./tests/Push";

describe(`Stack`, () => {
  constructorTests()
  pushTests()
})

