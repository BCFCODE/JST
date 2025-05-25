import { DoublyLinkedList } from ".."
import { checkDLLInternalStructure } from "../../../utils"
import toBeNullTests from "./utils/toBeNullTests"
import toBeTests from "./utils/toBeTests"

export const beforeInsert = (myDoublyLinkedList) => [
  ['\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 0]
]

const buildExpectedDLLAfterInsert = ({ index, value }) => {
  let myDoublyLinkedList = new DoublyLinkedList(1)
  myDoublyLinkedList.push(2)
  myDoublyLinkedList.push(3)
  const insertValue = myDoublyLinkedList.insert(index, value)
  return { myDoublyLinkedList, insertValue }
}

const testCounts = 10
export const generateRandomValidInsertInputs = () =>
  Array.from({ length: testCounts }).map(() => ({
    index: Math.floor(Math.random() * 3),
    value: Math.floor(Math.random() * 100000)
  }))

export const validateInsertOperationOnValidIndexes = ({ myDoublyLinkedList, insertValue, index, value }) => {
  const correct = buildExpectedDLLAfterInsert({ index, value })

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
    'head.next.next.next.next',
    'tail.prev.prev.prev.prev'
  ]

  return [
    ...checkDLLInternalStructure(myDoublyLinkedList),
    ...toBeTests({ my: myDoublyLinkedList, correct, paths: toBePaths }),
    ...toBeNullTests({ my: myDoublyLinkedList, paths: toBeNullPaths }),
    ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 4],
    // ['\n\tinsertValue', insertValue, 'toBe', true],
  ]
}

export const validateInsertOperationOnInvalidIndexes = ({ myDoublyLinkedList, insertValue, index, value }) => {
  const correct = buildExpectedDLLAfterInsert({ index, value })

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
    ['\n\tinsertValue', insertValue, 'toBe', false],
  ]
}

