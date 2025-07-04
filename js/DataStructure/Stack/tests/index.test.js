import { describe } from "vitest"
import ConstructorStack from "../Exercises/Constructor"
import PushStack from "../Exercises/Push"
import PopStack from "../Exercises/Pop"
import { constructorTests } from "./Constructor"
import { pushTests } from "./Push"
import { popTests } from "./Pop"

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