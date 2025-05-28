import { DoublyLinkedList } from ".."
import { checkDLLInternalStructure } from "../../../utils"
import toBeNullTests from "./utils/toBeNullTests"
import toBeTests from "./utils/toBeTests"

const buildExpectedDLLBeforeRemove = () => {
  let myDoublyLinkedList = new DoublyLinkedList(0)
  myDoublyLinkedList.push(1)
  myDoublyLinkedList.push(2)
  return { myDoublyLinkedList }
}

export const beforeRemove = (myDoublyLinkedList) => {
  const correct = buildExpectedDLLBeforeRemove()

  const toBePaths = [
    'head.value',
    'head.next.value',
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
  ];

  return [
    ...checkDLLInternalStructure(myDoublyLinkedList),
    ...toBeTests({ my: myDoublyLinkedList, correct, paths: toBePaths }),
    ...toBeNullTests({ my: myDoublyLinkedList, paths: toBeNullPaths }),
    ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 3],
  ]
}


const buildExpectedDLLAfterRemove = (index) => {
  let myDoublyLinkedList = new DoublyLinkedList(0)
  myDoublyLinkedList.push(1)
  myDoublyLinkedList.push(2)
  const removeValue = myDoublyLinkedList.remove(index)
  return { myDoublyLinkedList, removeValue }
}

const testCounts = 10
export const generateRandomValidRemoveInputs = () =>
  Array.from({ length: testCounts }).map(() => Math.floor(Math.random() * 3))

export const validateRemoveOperationOnValidIndexes = ({ myDoublyLinkedList, removeValue, index }) => {
  const correct = buildExpectedDLLAfterRemove(index)

  const toBePaths = [
    'head.value',
    'head.next.value',
    'head.next.value',
    'head.next.next.value',
    'tail.value',
    'tail.prev.value',
    'tail.prev.prev.value'
  ]

  const toBeNullPaths = [
    'head.prev',
    'tail.next',
    'head.next.next',
    'tail.prev.prev'
  ]

  return [
    ...checkDLLInternalStructure(myDoublyLinkedList),
    ...toBeTests({ my: myDoublyLinkedList, correct, paths: toBePaths }),
    ...toBeNullTests({ my: myDoublyLinkedList, paths: toBeNullPaths }),
    ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 2],
    ['\n\tremoveValue', removeValue, 'toEqual', correct.removeValue],
  ]
}

export const validateRemoveOperationOnInvalidIndexes = ({ myDoublyLinkedList, removeValue, index }) => {
  const correct = buildExpectedDLLAfterRemove(index)

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
    ['\n\tremoveValue', removeValue, 'toEqual', correct.removeValue],
  ]
}

