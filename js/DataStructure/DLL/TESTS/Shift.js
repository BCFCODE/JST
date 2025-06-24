import { checkDLLInternalStructure } from "../../../utils"

export const beforeShift = (myDoublyLinkedList) => [
  ...checkDLLInternalStructure(myDoublyLinkedList),
  ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 2],
  ['\n\tmyDoublyLinkedList.tail.prev.value', myDoublyLinkedList.tail.prev.value, 'toBe', 2],
  ['\n\tmyDoublyLinkedList.head.next.value', myDoublyLinkedList.head.next.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.head.next.next', myDoublyLinkedList.head.next.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.prev.prev', myDoublyLinkedList.tail.prev.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 2],
]

export const afterFirstShift = (myDoublyLinkedList, shiftValue) => [
  ...checkDLLInternalStructure(myDoublyLinkedList),
  ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.head.next', myDoublyLinkedList.head.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.prev', myDoublyLinkedList.tail.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 1],
  ['\n\tshiftValue', shiftValue, 'toEqual', { value: 2, next: null, prev: null }]
]

export const afterSecondShift = (myDoublyLinkedList, shiftValue) => [
  ['\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 0],
  ['\n\tshiftValue', shiftValue, 'toEqual', { value: 2, next: null, prev: null }]
]

export const afterThirdShift = (myDoublyLinkedList, shiftValue) => [
  ['\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 0],
  ['\n\tshiftValue', shiftValue, 'toBeUndefined', undefined]
]