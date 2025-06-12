import { describe } from "vitest"
import Stack from "../Lessons"
import { checkStackInternalStructure, executeTestCases } from "../../../utils"
import checkStackInternalStructure from "../../../utils/checkInternalStructures/checkStackInternalStructure"
import toBeNullTests from "../../../utils/tests/toBeNullTests"
import toEqualTests from "../../../utils/tests/toBeTests"
import toBeTests from "../../../utils/tests/toBeTests"

const buildExpectedDLLBeforePop = () => {
  let myStack = new Stack(7)
  myStack.push(23)
  myStack.push(3)
  const pushValue = myStack.push(11)
  return { myStack, pushValue }
}

export const validatePushOperationsBeforePop = ({ myStack, pushValue }) => {
  const correct = buildExpectedDLLBeforePop()

  const toBePaths = [
    'top.value',
    'top.next.value',
    'top.next.next.value',
    'top.next.next.next.value',
    'length',
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
    ...toBeTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toBePaths }),
    ...toEqualTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toEqualPaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tpushValue', pushValue, 'toEqual', correct.pushValue],
  ]
}

const buildExpectedDLLAfterFirstPop = () => {
  let myStack = new Stack(7)
  myStack.push(23)
  myStack.push(3)
  myStack.push(11)
  const popValue = myStack.pop()
  return { myStack, popValue }
}

export const validatePushOperationsAfterFirstPop = ({ myStack, popValue }) => {
  const correct = buildExpectedDLLAfterFirstPop()

  const toBePaths = [
    'top.value',
    'top.next.value',
    'top.next.next.value',
    'length',
  ]

  const toEqualPaths = [
    'top.next',
    'top.next.next',
  ]

  const toBeNullPaths = [
    'top.next.next.next',
  ]

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toBePaths }),
    ...toEqualTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toEqualPaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tpopValue', popValue, 'toEqual', correct.popValue],
  ]
}

const buildExpectedDLLAfterSecondPop = () => {
  let myStack = new Stack(7)
  myStack.push(23)
  myStack.push(3)
  myStack.push(11)
  myStack.pop()
  const popValue = myStack.pop()
  return { myStack, popValue }
}

export const validatePushOperationsAfterSecondPop = ({ myStack, popValue }) => {
  const correct = buildExpectedDLLAfterSecondPop()

  const toBePaths = [
    'top.value',
    'top.next.value',
    'length',
  ]

  const toEqualPaths = [
    'top.next',
  ]

  const toBeNullPaths = [
    'top.next.next',
  ]

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toBePaths }),
    ...toEqualTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toEqualPaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tpopValue', popValue, 'toEqual', correct.popValue],
  ]
}

const buildExpectedDLLAfterThirdPop = () => {
  let myStack = new Stack(7)
  myStack.push(23)
  myStack.push(3)
  myStack.push(11)
  myStack.pop()
  myStack.pop()
  const popValue = myStack.pop()
  return { myStack, popValue }
}

export const validatePushOperationsAfterThirdPop = ({ myStack, popValue }) => {
  const correct = buildExpectedDLLAfterThirdPop()

  const toBePaths = [
    'top.value',
    'length',
  ]

  const toEqualPaths = [];

  const toBeNullPaths = [
    'top.next',
  ]

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toBePaths }),
    ...toEqualTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toEqualPaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tpopValue', popValue, 'toEqual', correct.popValue],
  ]
}

const buildExpectedDLLAfterFourthPop = () => {
  let myStack = new Stack(7)
  myStack.push(23)
  myStack.push(3)
  myStack.push(11)
  myStack.pop()
  myStack.pop()
  myStack.pop()
  const popValue = myStack.pop()
  return { myStack, popValue }
}

export const validatePushOperationsAfterFourthPop = ({ myStack, popValue }) => {
  const correct = buildExpectedDLLAfterFourthPop()

  const toBePaths = [
    'top.value',
    'length',
  ]

  const toEqualPaths = [];

  const toBeNullPaths = [
    'top'
  ]

  return [
    ...toBeTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toBePaths }),
    ...toEqualTests({ name: 'myStack', my: myStack, correct: correct.myStack, paths: toEqualPaths }),
    ...toBeNullTests({ name: 'myStack', my: myStack, paths: toBeNullPaths }),
    ['\n\tpopValue', popValue, 'toEqual', correct.popValue],
  ]
}


// const testCounts = 10
// export const generateRandomValidPushInputs = () =>
//   Array.from({ length: testCounts }).map(() => Math.floor(Math.random() * 3))


export const popTests = (Stack) => {
  describe(`pop()`, () => {

    describe(`Before pop()\n\tlet myStack = new Stack(7)\n\tmyStack.push(23)\n\tmyStack.push(3)\n\tconst pushValue = myStack.push(11)`, () => {
      let myStack = new Stack(7)
      myStack.push(23)
      myStack.push(3)
      const pushValue = myStack.push(11)

      const tests = validatePushOperationsBeforePop({ myStack, pushValue })

      executeTestCases(tests)
    })

    describe(`After first pop()\n\tlet myStack = new Stack(7)\n\tmyStack.push(23)\n\tmyStack.push(3)\n\tmyStack.push(11)\n\t\n\tconst popValue = myStack.pop()`, () => {
      let myStack = new Stack(7)
      myStack.push(23)
      myStack.push(3)
      myStack.push(11)
      const popValue = myStack.pop()

      const tests = validatePushOperationsAfterFirstPop({ myStack, popValue })

      executeTestCases(tests)
    })

    describe(`After second pop()\n\tlet myStack = new Stack(7)\n\tmyStack.push(23)\n\tmyStack.push(3)\n\tmyStack.push(11)\n\tmyStack.pop()\n\tconst popValue = myStack.pop()`, () => {
      let myStack = new Stack(7)
      myStack.push(23)
      myStack.push(3)
      myStack.push(11)
      myStack.pop()
      const popValue = myStack.pop()

      const tests = validatePushOperationsAfterSecondPop({ myStack, popValue })

      executeTestCases(tests)
    })

    describe(`After third pop()\n\tlet myStack = new Stack(7)\n\tmyStack.push(23)\n\tmyStack.push(3)\n\tmyStack.push(11)\n\tmyStack.pop()\n\tmyStack.pop()\n\tconst popValue = myStack.pop()`, () => {
      let myStack = new Stack(7)
      myStack.push(23)
      myStack.push(3)
      myStack.push(11)
      myStack.pop()
      myStack.pop()
      const popValue = myStack.pop()

      const tests = validatePushOperationsAfterThirdPop({ myStack, popValue })

      executeTestCases(tests)
    })

    describe(`After fourth pop()\n\tlet myStack = new Stack(7)\n\tmyStack.push(23)\n\tmyStack.push(3)\n\tmyStack.push(11)\n\tmyStack.pop()\n\tmyStack.pop()\n\tmyStack.pop()\n\tconst popValue = myStack.pop()`, () => {
      let myStack = new Stack(7)
      myStack.push(23)
      myStack.push(3)
      myStack.push(11)
      myStack.pop()
      myStack.pop()
      myStack.pop()
      const popValue = myStack.pop()

      const tests = validatePushOperationsAfterFourthPop({ myStack, popValue })

      executeTestCases(tests)
    })

  })
}