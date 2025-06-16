import { describe } from "vitest"
import { constructorTests } from "./Constructor"
import ConstructorQueue from "../Exercises/Constructor"

const tests = [
  {
    describeText: 'EXERCISE-Queue-Constructor',
    Stack: ConstructorQueue,
    tests: constructorTests
  },
]

tests.forEach(({ describeText, tests, Stack }) => {
  describe(describeText, () => tests(Stack))
})