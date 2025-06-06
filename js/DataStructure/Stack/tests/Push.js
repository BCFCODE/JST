import { describe } from "vitest"
import Stack from ".."
import { checkStackInternalStructure, executeTestCases } from "../../../utils"
import checkStackInternalStructure from "../../../utils/checkStackInternalStructure"
import toBeNullTests from "../../../utils/tests/toBeNullTests"
import toEqualTests from "../../../utils/tests/toBeTests"
import toBeTests from "../../../utils/tests/toBeTests"

const buildExpectedDLLBeforePush = () => {
  let myStack = new Stack(7)
  return { myStack }
}

export const beforePush = (myStack) => {
  const correct = buildExpectedDLLBeforePush().myStack

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


const buildExpectedDLLAfterPush = () => {
  let myStack = new Stack(7)
  myStack.push(23)
  myStack.push(3)
  const pushValue = myStack.push(11)
  return { myStack, pushValue }
}

const testCounts = 10
export const generateRandomValidPushInputs = () =>
  Array.from({ length: testCounts }).map(() => Math.floor(Math.random() * 3))

export const validatePushOperations = ({ myStack, pushValue }) => {
  const correct = buildExpectedDLLAfterPush()

  const toBePaths = [
    'top.value',
    'top.next.value',
    'top.next.next.value',
    'top.next.next.next.value',
    'top.length',
  ]

  const toEqualPaths = [
    'top.next',
    'top.next.next',
    'top.next.next.next',
  ]

  const toBeNullPaths = [
    'top.next.next.next.next',
  ]

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ my: myStack, correct: correct.myStack, paths: toBePaths }),
    ...toEqualTests({ my: myStack, correct: correct.myStack, paths: toEqualPaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tpushValue', pushValue, 'toEqual', correct.pushValue],
  ]
}

export const pushTests = (Stack) => {
  describe(`push()`, () => {

    describe(`Before push()\n\tlet myStack = new Stack(7)`, () => {
      let myStack = new Stack(7)

      const tests = beforePush(myStack)

      executeTestCases(tests)
    })

    describe(`After push()\n\tlet myStack = new Stack(7)\n\tmyStack.push(23)\n\tmyStack.push(3)\n\tconst pushValue = myStack.push(11)`, () => {
      let myStack = new Stack(7)
      myStack.push(23)
      myStack.push(3)
      const pushValue = myStack.push(11)

      const tests = validatePushOperations({ myStack, pushValue })

      executeTestCases(tests)
    })
    
  })
}