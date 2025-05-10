import { checkDLLInternalStructure } from "../../../utils"

export const beforeGet = (myDoublyLinkedList) => [
  ...checkDLLInternalStructure(myDoublyLinkedList),
  ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.head.next.value', myDoublyLinkedList.head.next.value, 'toBe', 2],
  ['\n\tmyDoublyLinkedList.head.next.next.value', myDoublyLinkedList.head.next.next.value, 'toBe', 3],
  ['\n\tmyDoublyLinkedList.head.next.next.next.value', myDoublyLinkedList.head.next.next.next.value, 'toBe', 4],
  ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 4],
  ['\n\tmyDoublyLinkedList.tail.prev.value', myDoublyLinkedList.tail.prev.value, 'toBe', 3],
  ['\n\tmyDoublyLinkedList.tail.prev.prev.value', myDoublyLinkedList.tail.prev.prev.value, 'toBe', 2],
  ['\n\tmyDoublyLinkedList.tail.prev.prev.prev.value', myDoublyLinkedList.tail.prev.prev.prev.value, 'toBe', 1],
  ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.head.next.next.next.next', myDoublyLinkedList.head.next.next.next.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.prev.prev.prev.prev', myDoublyLinkedList.tail.prev.prev.prev.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 4],
]


export const afterGetIndex3 = (myDoublyLinkedList, getValue) => [
  ...beforeGet(myDoublyLinkedList),
  ['\n\tgetValue.next', getValue.next, 'toBeNull', null],
  ['\n\tgetValue.value', getValue.value, 'toBe', 4],
  ['\n\tgetValue.prev.value', getValue.prev.value, 'toBe', 3],
  ['\n\tgetValue.prev.prev.value', getValue.prev.prev.value, 'toBe', 2],
  ['\n\tgetValue.prev.prev.prev.value', getValue.prev.prev.prev.value, 'toBe', 1],
]

export const afterGetIndex2 = (myDoublyLinkedList, getValue) => [
  ...beforeGet(myDoublyLinkedList),
  ['\n\tgetValue.next.next', getValue.next.next, 'toBeNull', null],
  ['\n\tgetValue.next.value', getValue.next.value, 'toBe', 4],
  ['\n\tgetValue.value', getValue.value, 'toBe', 3],
  ['\n\tgetValue.prev.value', getValue.prev.value, 'toBe', 2],
  ['\n\tgetValue.prev.prev.value', getValue.prev.prev.value, 'toBe', 1],
  ['\n\tgetValue.prev.prev.prev', getValue.prev.prev.prev, 'toBeNull', null]
]

export const afterGetIndex1 = (myDoublyLinkedList, getValue) => [
  ...beforeGet(myDoublyLinkedList),
  ['\n\tgetValue.next.next.next', getValue.next.next.next, 'toBeNull', null],
  ['\n\tgetValue.next.next.value', getValue.next.next.value, 'toBe', 4],
  ['\n\tgetValue.next.value', getValue.next.value, 'toBe', 3],
  ['\n\tgetValue.value', getValue.value, 'toBe', 2],
  ['\n\tgetValue.prev.value', getValue.prev.value, 'toBe', 1],
  ['\n\tgetValue.prev.prev', getValue.prev.prev, 'toBeNull', null]
]

export const afterGetIndex0 = (myDoublyLinkedList, getValue) => [
  ...beforeGet(myDoublyLinkedList),
  ['\n\tgetValue.next.next.next.next', getValue.next.next.next.next, 'toBeNull', null],
  ['\n\tgetValue.next.next.next.value', getValue.next.next.next.value, 'toBe', 4],
  ['\n\tgetValue.next.next.value', getValue.next.next.value, 'toBe', 3],
  ['\n\tgetValue.next.value', getValue.next.value, 'toBe', 2],
  ['\n\tgetValue.value', getValue.value, 'toBe', 1],
  ['\n\tgetValue.prev', getValue.prev, 'toBeNull', null]
]

export const afterGetOutOfRangeIndex = (myDoublyLinkedList, getValue) => [
  ...beforeGet(myDoublyLinkedList),
  ['\n\tgetValue', getValue, 'toBeUndefined', undefined]
]



