import { describe } from "vitest"
import { constructorTests } from "./Constructor"
import { enqueueTests } from "./Enqueue"
import QueueConstructor from "../Exercises/Constructor"
import QueueEnqueue from "../Exercises/Enqueue"

const tests = [
  {
    describeText: 'EXERCISE-Queue-Constructor',
    Queue: QueueConstructor,
    tests: constructorTests
  },
  {
    describeText: 'EXERCISE-Queue-Enqueue',
    Queue: QueueEnqueue,
    tests: enqueueTests
  },
]

tests.forEach(({ describeText, tests, Queue }) => {
  describe(describeText, () => tests(Queue))
}) 