import Queue from "../Lessons"
import toBeTests from "../../../utils/tests/toBeTests"
import toBeNullTests from "../../../utils/tests/toBeNullTests"
import { describe } from "vitest"
import { executeTestCases } from "../../../utils"
import checkQueueInternalStructure from "../../../utils/checkInternalStructures/checkQueueInternalStructure"
import toEqualTests from "../../../utils/tests/toBeTests"

const buildExpectedBeforeEnqueue = () => {
  let myQueue = new Queue(11)
  return { correct: myQueue }
}

const buildExpectedAfterFirstEnqueue = () => {
  let myQueue = new Queue(11)
  const returnValue = myQueue.enqueue(3)
  return { correct: myQueue, returnValue }
}

const buildExpectedAfterSecondEnqueue = () => {
  let myQueue = new Queue(11)
  myQueue.enqueue(3)
  const returnValue = myQueue.enqueue(23)
  return { correct: myQueue, returnValue }
}

export const validateBeforeEnqueueOperations = (myQueue) => {
  const { correct } = buildExpectedBeforeEnqueue()

  const toBePaths = [
    'first.value',
    'last.value',
    'length'
  ]

  const toBeNullPaths = [
    'first.next',
    'last.next',
  ];

  return [
    checkQueueInternalStructure(myQueue),
    toBeTests({ name: 'myQueue', my: myQueue, correct, paths: toBePaths }),
    toBeNullTests({ name: 'myQueue', my: myQueue, paths: toBeNullPaths })
  ].flat()

}

export const validateAfterFirstEnqueueOperations = ({ myQueue, returnValue }) => {
  const { correct } = buildExpectedAfterFirstEnqueue()

  const toBePaths = [
    'first.value',
    'first.next.value',
    'last.value',
    'length'
  ]

  const toBeNullPaths = [
    'first.next.next',
    'last.next',
  ];


  return [
    checkQueueInternalStructure(myQueue),
    toBeTests({ name: 'myQueue', my: myQueue, correct, paths: toBePaths }),
    toBeNullTests({ name: 'myQueue', my: myQueue, paths: toBeNullPaths }),
    toBeTests({ name: 'returnValue', my: returnValue, correct, paths: toBePaths }),
    toBeNullTests({ name: 'returnValue', my: returnValue, paths: toBeNullPaths }),
  ].flat()

}

export const validateAfterSecondEnqueueOperations = ({ myQueue, returnValue }) => {
  const { correct } = buildExpectedAfterSecondEnqueue()

  const toBePaths = [
    'first.value',
    'first.next',
    'first.next.value',
    'first.next.next',
    'first.next.next.value',
    'last.value',
    'length'
  ]

  const toBeNullPaths = [
    'first.next.next.next',
    'last.next',
  ];


  return [
    checkQueueInternalStructure(myQueue),
    toBeTests({ name: 'myQueue', my: myQueue, correct, paths: toBePaths }),
    toBeNullTests({ name: 'myQueue', my: myQueue, paths: toBeNullPaths }),
    toBeTests({ name: 'returnValue', my: returnValue, correct, paths: toBePaths }),
    toBeNullTests({ name: 'returnValue', my: returnValue, paths: toBeNullPaths }),
  ].flat()

}

export const enqueueTests = (Queue) => {
  describe(`enqueue`, () => {

    describe(`Before enqueue\n\tlet myQueue = new Queue(11)`, () => {
      let myQueue = new Queue(11)

      const tests = validateBeforeEnqueueOperations(myQueue)

      executeTestCases(tests)
    })

    describe(`After first enqueue\n\tlet myQueue = new Queue(11)\n\tconst returnValue = myQueue.enqueue(3)`, () => {
      let myQueue = new Queue(11)
      const returnValue = myQueue.enqueue(3)

      const tests = validateAfterFirstEnqueueOperations({ myQueue, returnValue })

      executeTestCases(tests)
    })

    describe(`After second enqueue\n\tlet myQueue = new Queue(11)\n\tconst returnValue = myQueue.enqueue(3)`, () => {
      let myQueue = new Queue(11)
      myQueue.enqueue(3)
      const returnValue = myQueue.enqueue(23)

      const tests = validateAfterSecondEnqueueOperations({ myQueue, returnValue })

      executeTestCases(tests)
    })

  })
}



