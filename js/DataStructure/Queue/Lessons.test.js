import { describe } from "vitest";
import Queue from "./Lessons";
import { constructorTests } from "./tests/Constructor";
import { enqueueTests } from "./tests/Enqueue";

describe(`Queue`, () => {
  constructorTests(Queue)
  enqueueTests(Queue)
})

