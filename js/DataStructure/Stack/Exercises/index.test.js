import { describe } from "vitest"
import ConstructorStack from "./Constructor"
import PushStack from "./Push"
import PopStack from "./Pop"
import { constructorTests } from "../tests/Constructor"
import { pushTests } from "../tests/Push"
import { popTests } from "../tests/Pop"

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
  {
    describeText: 'EXERCISE-Stack-Pop',
    Stack: PopStack,
    tests: popTests
  },
]

tests.forEach(({ describeText, tests, Stack }) => {
  describe(describeText, () => tests(Stack))
})