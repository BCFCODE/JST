import { describe } from "vitest"
import { constructorTests, dequeueTests, enqueueTests } from '.'
import { QueueConstructor, QueueDequeue, QueueEnqueue } from "../Exercises"

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
  {
    describeText: 'EXERCISE-Queue-Dequeue',
    Queue: QueueDequeue,
    tests: dequeueTests
  },
]

tests.forEach(({ describeText, tests, Queue }) => {
  describe(describeText, () => tests(Queue))
}) 