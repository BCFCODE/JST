import { describe } from "vitest"
import { constructorTests } from "./Constructor"
import ConstructorQueue from "../Exercises/Constructor"

const tests = [
  {
    describeText: 'EXERCISE-Queue-Constructor',
    Queue: ConstructorQueue,
    tests: constructorTests
  },
]

tests.forEach(({ describeText, tests, Queue }) => {
  describe(describeText, () => tests(Queue))
})