import Stack from "../Lessons"
import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests, checkStackInternalStructure } from "../../../utils"

const buildExpectedStackConstructor = () => {
  let myStack = new Stack(4)
  return { myStack }
}

export const validateConstructorOperations = (myStack) => {
  const correct = buildExpectedStackConstructor().myStack

  const toBePaths = [
    'top.value',
    'length'
  ]

  const toBeNullPaths = [
    'top.next',
  ];

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ name: 'myStack', my: myStack, correct, paths: toBePaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
  ]
}

const constructorTests = (Stack) => {
  describe(`constructor`, () => {
    describe(`\n\tlet myStack = new Stack(4)`, () => {
      let myStack = new Stack(4)

      const tests = validateConstructorOperations(myStack)

      executeTestCases(tests)
    })
  })
}

export default constructorTests



