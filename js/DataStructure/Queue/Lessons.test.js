import { describe } from "vitest";
import Queue from "./Lessons";
import { constructorTests } from "./tests/Constructor";
import { enqueueTests } from "./tests/Enqueue";
import { dequeueTests } from "./tests/Dequeue";

describe(`Queue`, () => {
  constructorTests(Queue)
  enqueueTests(Queue)
  dequeueTests(Queue)
})

