import { describe } from "vitest";
import Queue from "./Lessons";
import { constructorTests } from "./tests/Constructor";

describe(`Queue`, () => {
  constructorTests(Queue)
})

