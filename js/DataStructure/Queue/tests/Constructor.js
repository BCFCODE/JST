import Queue from "../Lessons"
import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests, checkQueueInternalStructure } from "../../../utils"

const buildExpectedQueueConstructor = () => {
  let myQueue = new Queue(4)
  return { myQueue }
}

export const validateConstructorOperations = (myQueue) => {
  const correct = buildExpectedQueueConstructor().myQueue

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

const constructorTests = (Queue) => {
  describe(`constructor`, () => {
    describe(`\n\tlet myQueue = new Queue(4)`, () => {
      let myQueue = new Queue(4)

      const tests = validateConstructorOperations(myQueue)

      executeTestCases(tests)
    })
  })
}

export default constructorTests



