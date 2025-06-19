import { describe } from "vitest"
import { executeTestCases } from "../../../utils"
import checkQueueInternalStructure from "../../../utils/checkInternalStructures/checkQueueInternalStructure"
import toBeNullTests from "../../../utils/tests/toBeNullTests"
import toBeTests from "../../../utils/tests/toBeTests"

const buildExpectedBeforeDequeue = (Queue) => {
  let myQueue = new Queue(11)
  myQueue.enqueue(3)
  const returnValue = myQueue.enqueue(23)
  return { correct: { myQueue, returnValue } }
}

const buildExpectedAfterFirstDequeue = (Queue) => {
  let myQueue = new Queue(11)
  myQueue.enqueue(3)
  myQueue.enqueue(23)
  const returnValue = myQueue.dequeue()
  return { correct: { myQueue, returnValue } }
}

const buildExpectedAfterSecondDequeue = (Queue) => {
  let myQueue = new Queue(11)
  myQueue.enqueue(3)
  myQueue.enqueue(23)
  myQueue.dequeue()
  const returnValue = myQueue.dequeue()
  return { correct: { myQueue, returnValue } }
}

const buildExpectedAfterThirdDequeue = (Queue) => {
  let myQueue = new Queue(11)
  myQueue.enqueue(3)
  myQueue.enqueue(23)
  myQueue.dequeue()
  myQueue.dequeue()
  const returnValue = myQueue.dequeue()
  return { correct: { myQueue, returnValue } }
}

export const validateBeforeDequeueOperations =
  (Queue, { myQueue, returnValue }) => {
    const { correct } = buildExpectedBeforeDequeue(Queue)

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
      toBeTests({ name: 'myQueue', my: myQueue, correct: correct.myQueue, paths: toBePaths }),
      toBeNullTests({ name: 'myQueue', my: myQueue, paths: toBeNullPaths }),
      toBeTests({ name: 'returnValue', my: returnValue, correct: correct.myQueue, paths: toBePaths }),
      toBeNullTests({ name: 'returnValue', my: returnValue, paths: toBeNullPaths }),
    ].flat()

  }

export const validateAfterFirstDequeueOperations =
  (Queue, { myQueue, returnValue }) => {
    const { correct } = buildExpectedAfterFirstDequeue(Queue)

    return [
      checkQueueInternalStructure(myQueue),
      toBeTests({
        name: 'myQueue', my: myQueue, correct: correct.myQueue, paths: [
          'first.value',
          'first.next.value',
          'last.value',
          'length'
        ]
      }),
      toBeNullTests({
        name: 'myQueue', my: myQueue, paths: [
          'first.next.next',
          'last.next',
        ]
      }),
      toBeTests({ name: 'returnValue', my: returnValue, correct: correct.returnValue, paths: ['value'] }),
      toBeNullTests({ name: 'returnValue', my: returnValue, correct: correct.returnValue, paths: ['next'] }),
    ].flat()

  }

export const validateAfterSecondDequeueOperations =
  (Queue, { myQueue, returnValue }) => {
    const { correct } = buildExpectedAfterSecondDequeue(Queue)

    return [
      checkQueueInternalStructure(myQueue),
      toBeTests({
        name: 'myQueue', my: myQueue, correct: correct.myQueue, paths: [
          'first.value',
          'last.value',
          'length'
        ]
      }),
      toBeNullTests({ name: 'myQueue', my: myQueue, paths: ['first.next', 'last.next'] }),
      toBeTests({ name: 'returnValue', my: returnValue, correct: correct.returnValue, paths: ['value'] }),
      toBeNullTests({ name: 'returnValue', my: returnValue, correct: correct.returnValue, paths: ['next'] }),
    ].flat()

  }

export const validateAfterThirdDequeueOperations =
  (Queue, { myQueue, returnValue }) => {
    const { correct } = buildExpectedAfterThirdDequeue(Queue)
    return [
      toBeTests({ name: 'myQueue', my: myQueue, correct: correct.myQueue, paths: ['length'] }),
      toBeNullTests({ name: 'myQueue', my: myQueue, correct: correct.myQueue, paths: ['first', 'last'] }),
      toBeTests({ name: 'returnValue', my: returnValue, correct: correct.returnValue, paths: ['value'] }),
      toBeNullTests({ name: 'returnValue', my: returnValue, correct: correct.returnValue, paths: ['next'] }),
    ].flat()
  }

export const dequeueTests = (Queue) => {
  describe(`dequeue`, () => {

    describe(`Before dequeue\n\tlet myQueue = new Queue(11)\n\tmyQueue.enqueue(3)\n\tconst returnValue = myQueue.enqueue(23)`, () => {
      let myQueue = new Queue(11)
      myQueue.enqueue(3)
      const returnValue = myQueue.enqueue(23)

      const tests = validateBeforeDequeueOperations(Queue, { myQueue, returnValue })

      executeTestCases(tests)
    })

    describe(`After first dequeue\n\tlet myQueue = new Queue(11)\n\tmyQueue.enqueue(3)\n\tmyQueue.enqueue(23)\n\tconst returnValue = myQueue.dequeue()`, () => {
      let myQueue = new Queue(11)
      myQueue.enqueue(3)
      myQueue.enqueue(23)
      const returnValue = myQueue.dequeue()

      const tests = validateAfterFirstDequeueOperations(Queue, { myQueue, returnValue })

      executeTestCases(tests)
    })

    describe(`After second dequeue\n\t\n\tlet myQueue = new Queue(11)\n\tmyQueue.enqueue(3)\n\tmyQueue.enqueue(23)\n\tmyQueue.dequeue()\n\tconst returnValue = myQueue.dequeue()`, () => {
      let myQueue = new Queue(11)
      myQueue.enqueue(3)
      myQueue.enqueue(23)
      myQueue.dequeue()
      const returnValue = myQueue.dequeue()

      const tests = validateAfterSecondDequeueOperations(Queue, { myQueue, returnValue })

      executeTestCases(tests)
    })

    describe(`After third dequeue\n\t\n\tlet myQueue = new Queue(11)\n\tmyQueue.enqueue(3)\n\tmyQueue.enqueue(23)\n\tmyQueue.dequeue()\n\tmyQueue.dequeue()\n\tconst returnValue = myQueue.dequeue()`, () => {
      let myQueue = new Queue(11)
      myQueue.enqueue(3)
      myQueue.enqueue(23)
      myQueue.dequeue()
      myQueue.dequeue()
      const returnValue = myQueue.dequeue()

      const tests = validateAfterThirdDequeueOperations(Queue, { myQueue, returnValue })

      executeTestCases(tests)
    })

  })
}



