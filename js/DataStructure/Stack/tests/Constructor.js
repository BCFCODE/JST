import Stack from "../Lessons"
import checkStackInternalStructure from "../../../utils/checkStackInternalStructure"
import toBeTests from "../../../utils/tests/toBeTests"
import toBeNullTests from "../../../utils/tests/toBeNullTests"
import { describe } from "vitest"
import { executeTestCases } from "../../../utils"

const buildExpectedStackConstructor = () => {
  let myStack = new Stack(4)
  return { myStack }
}

export const validateConstructorOperations = (myStack) => {
  const correct = buildExpectedStackConstructor().myStack

  const toBePaths = [
    'top.value',
  ]

  const toBeNullPaths = [
    'top.next',
  ];

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ my: myStack, correct, paths: toBePaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tmyStack.length', myStack.length, 'toBe', 1],
  ]
}

export const constructorTests = (Stack) => {
  describe(`constructor`, () => {
    describe(`\n\tlet myStack = new Stack(4)`, () => {
      let myStack = new Stack(4)

      const tests = validateConstructorOperations(myStack)

      executeTestCases(tests)
    })
  })
}



