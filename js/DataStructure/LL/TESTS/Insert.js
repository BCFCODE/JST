import { describe } from "vitest";
import { checkLLInternalStructure, executeTestCases } from "../../../utils"

export const beforeInsert = (myLinkedList) => [
  ['\n\tmyLinkedList.head', myLinkedList.head, 'toBeNull', null],
  ['\n\tmyLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 0],
]

export const afterFirstInsert = (myLinkedList, insertValue) => [
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
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 1],
  ['\n\tmyLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
  ['\n\tinsertValue === myLinkedList', insertValue === myLinkedList, 'toBe', true]
]

export const afterSecondInsert = (myLinkedList, insertValue) => [
  ...checkLLInternalStructure(myLinkedList),
  [
    '\n\tmyLinkedList.head', myLinkedList.head, 'toEqual', {
      value: 'New value in the beginning',
      next: {
        value: 1,
        next: null
      }
    }
  ],
  [
    '\n\tmyLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
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
  ['\n\tmyLinkedList.head.value', myLinkedList.head.value, 'toBe', 'New value in the beginning'],
  ['\n\tmyLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 1],
  ['\n\tmyLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
  ['\n\tmyLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
  ['\n\tinsertValue === myLinkedList', insertValue === myLinkedList, 'toBe', true],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 2],
];

export const afterThirdInsert = (myLinkedList, insertValue) => [
  ...checkLLInternalStructure(myLinkedList),
  [
    '\n\tmyLinkedList.head', myLinkedList.head, 'toEqual', {
      value: 'New value in the beginning',
      next: {
        value: 'New value in the middle',
        next: {
          value: 1,
          next: null
        }
      }
    }
  ],
  [
    '\n\tmyLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
      value: 'New value in the middle',
      next: {
        value: 1,
        next: null
      }
    }
  ],
  [
    'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
      value: 1,
      next: null
    }
  ],
  ['\n\tmyLinkedList.head.value', myLinkedList.head.value, 'toBe', 'New value in the beginning'],
  ['\n\tmyLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 'New value in the middle'],
  ['\n\tmyLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
  ['\n\tmyLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head.next.next', myLinkedList.head.next.next, 'toEqual', {
    value: 1,
    next: null
  }],
  ['\n\tmyLinkedList.head.next.next.next', myLinkedList.head.next.next.next, 'toBeNull', null],
  ['\n\tmyLinkedList.head.next.next === myLinkedList.tail', myLinkedList.head.next.next === myLinkedList.tail, 'toBe', true],
  ['\n\tinsertValue', insertValue, 'toBe', true],
  ['\n\tmyLinkedList.length', myLinkedList.length, 'toBe', 3],
];

export const invalidIndexTestsForInsert = (LinkedList, index) =>
  describe(`EXERCISE-LL-Insert`, () => {
    describe(`After insert(${index}, 'Index out of valid range') - Invalid index\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.insert(0, 1)\n\tmyLinkedList.insert(0, 'New value in the beginning')\n\tconst setValue = myLinkedList.set(${index}, 4)`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      myLinkedList.insert(0, 1)
      myLinkedList.insert(0, 'New value in the beginning')
      const insertValue = myLinkedList.insert(index, 'Index out of valid range')

      const tests = [
        [`\n\tinsertValue === false`, insertValue === false, 'toBe', true],
      ]

      executeTestCases(tests)
    })
  });


