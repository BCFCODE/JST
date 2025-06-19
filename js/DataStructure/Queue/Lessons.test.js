import { describe } from "vitest";
import Queue from "./Lessons";
import { constructorTests, enqueueTests, dequeueTests } from "./tests";

describe(`Queue`, () => {
  constructorTests(Queue)
  enqueueTests(Queue)
  dequeueTests(Queue)
})

