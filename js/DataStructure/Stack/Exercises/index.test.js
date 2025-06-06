import { describe } from "vitest"
import ConstructorStack from "./Constructor"
import PushStack from "./Push"
import { constructorTests } from "../tests/Constructor"
import { pushTests } from "../tests/Push"

const tests = [
  {
    describeText: 'EXERCISE-Stack-Constructor',
    Stack: ConstructorStack,
    tests: constructorTests
  },
  {
    describeText: 'EXERCISE-Stack-Push',
    Stack: PushStack,
    tests: pushTests
  },
]

tests.forEach(({ describeText, tests, Stack }) => {
  describe(describeText, () => tests(Stack))
})