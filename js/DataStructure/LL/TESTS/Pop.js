import { checkLLInternalStructure } from "../../../utils"

export const beforePop = (myLinkedList) => [
  ...checkLLInternalStructure(myLinkedList),
  [
    '\n\tmyLinkedList.head', myLinkedList.head, 'toEqual', {
      value: 1,
      next: {
        value: 2,
        next: null
      }
    }
  ],
  [
    '\n\tmyLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
      value: 2,
      next: null
    }
  ],
  [
    'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
      value: 2,
      next: null
    }
  ],
  ['\n\tmyLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
  ['\n\tmyLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 2],
  ['\n\tmyLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 2],
  ['\n\tmyLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 2],
]

export const afterFirstPop = (myLinkedList, popValue) => [
  ...checkLLInternalStructure(myLinkedList),
  [
    '\n\tmyLinkedList.head', myLinkedList.head, 'toEqual', {
      value: 1,
      next: null
    }
  ],
  [
    'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
      value: 1,
      next: null
    }
  ],
  ['\n\tmyLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
  ['\n\tmyLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null],
  ['\n\tmyLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
  ['\n\tmyLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
  [`\n\tpopValue`, popValue, 'toEqual', { value: 2, next: null }],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 1],
]

export const afterSecondPop = (myLinkedList, popValue) => [
  ['\n\tmyLinkedList.head', myLinkedList.head, 'toBeNull', null],
  ['\n\tmyLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
  ['\n\tpopValue', popValue, 'toEqual', { value: 1, next: null }],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 0],
]

export const afterThirdPop = (myLinkedList, popValue) => [
  ['\n\tmyLinkedList.head', myLinkedList.head, 'toBeNull', null],
  ['\n\tmyLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
  ['\n\tpopValue', popValue, 'toBeUndefined', undefined],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 0],
]

