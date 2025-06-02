import { DoublyLinkedList } from ".."
import { checkDLLInternalStructure } from "../../../utils"
import toBeNullTests from "../../../utils/tests/toBeNullTests"
import toBeTests from "./utils/toBeTests"

export const beforeSet = (myDoublyLinkedList) => [
  ...checkDLLInternalStructure(myDoublyLinkedList),
  ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.head.next.value', myDoublyLinkedList.head.next.value, 'toBe', 2],
  ['\n\tmyDoublyLinkedList.head.next.next.value', myDoublyLinkedList.head.next.next.value, 'toBe', 3],
  ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 3],
  ['\n\tmyDoublyLinkedList.tail.prev.value', myDoublyLinkedList.tail.prev.value, 'toBe', 2],
  ['\n\tmyDoublyLinkedList.tail.prev.prev.value', myDoublyLinkedList.tail.prev.prev.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.head.next.next.next', myDoublyLinkedList.head.next.next.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.prev.prev.prev', myDoublyLinkedList.tail.prev.prev.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 3],
]

const buildExpectedDLLAfterSet = ({ index, value }) => {
  let myDoublyLinkedList = new DoublyLinkedList(1)
  myDoublyLinkedList.push(2)
  myDoublyLinkedList.push(3)
  const setValue = myDoublyLinkedList.set(index, value)
  return { myDoublyLinkedList, setValue }
}

const testCounts = 15
export const generateRandomValidSetInputs = () =>
  Array.from({ length: testCounts }).map(() => ({
    index: Math.floor(Math.random() * 3),
    value: Math.floor(Math.random() * 100000)
  }))

export const validateSetOperationOnValidIndexes = ({ myDoublyLinkedList, setValue, index, value }) => {
  const correct = buildExpectedDLLAfterSet({ index, value })

  const toBePaths = [
    'head.value',
    'head.next.value',
    'head.next.next.value',
    'tail.value',
    'tail.prev.value',
    'tail.prev.prev.value'
  ]

  const toBeNullPaths = [
    'head.prev',
    'tail.next',
    'head.next.next.next',
    'tail.prev.prev.prev'
  ]

  return [
    ...checkDLLInternalStructure(myDoublyLinkedList),
    ...toBeTests({ my: myDoublyLinkedList, correct, paths: toBePaths }),
    ...toBeNullTests({ my: myDoublyLinkedList, paths: toBeNullPaths }),
    ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 3],
    ['\n\tsetValue', setValue, 'toBe', true],
  ]
}

export const validateSetOperationOnInvalidIndexes = ({ myDoublyLinkedList, setValue, index, value }) => {
  const correct = buildExpectedDLLAfterSet({ index, value })

  const toBePaths = [
    'head.value',
    'head.next.value',
    'head.next.next.value',
    'tail.value',
    'tail.prev.value',
    'tail.prev.prev.value'
  ]

  const toBeNullPaths = [
    'head.prev',
    'tail.next',
    'head.next.next.next',
    'tail.prev.prev.prev'
  ]

  return [
    ...checkDLLInternalStructure(myDoublyLinkedList),
    ...toBeTests({ my: myDoublyLinkedList, correct, paths: toBePaths }),
    ...toBeNullTests({ my: myDoublyLinkedList, paths: toBeNullPaths }),
    ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 3],
    ['\n\tsetValue', setValue, 'toBe', false],
  ]
}

