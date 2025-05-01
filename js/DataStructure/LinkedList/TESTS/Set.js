import { describe } from "vitest"
import { checkLLInternalStructure, executeTestCases, J } from "../../../utils"

export const beforeSet = (myLinkedList) => [
  ...checkLLInternalStructure(myLinkedList),
  [
    'myLinkedList.head', myLinkedList.head, 'toEqual', {
      value: 11,
      next: {
        value: 3,
        next: {
          value: 23,
          next: {
            value: 7,
            next: null
          }
        }
      }
    }
  ],
  [
    'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
      value: 3,
      next: {
        value: 23,
        next: {
          value: 7,
          next: null
        }
      }
    }
  ],
  ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 11],
  ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
  ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
  [
    'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
      value: 7,
      next: null
    }
  ],
  ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 7],
  ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
  ['myLinkedList.length', myLinkedList.length, 'toBe', 4],
]

export const afterSet4ToIndex1 = (myLinkedList, setValue) => [
  [
    'myLinkedList.head', myLinkedList.head, 'toEqual', {
      value: 11,
      next: {
        value: 4,
        next: {
          value: 23,
          next: {
            value: 7,
            next: null
          }
        }
      }
    }
  ],
  [
    'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
      value: 4,
      next: {
        value: 23,
        next: {
          value: 7,
          next: null
        }
      }
    }
  ],
  ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 11],
  ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
  ['myLinkedList.head.next.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
  [
    'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
      value: 7,
      next: null
    }
  ],
  ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 7],
  ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
  ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
  ['\n\tconst setValue = myLinkedList.set(1, 4);\n\tsetValue === true >> true', setValue === true, 'toBe', true],
]

export const invalidIndexTestsForSet = (LinkedList, index) =>
  describe(`EXERCISE-LL-Set`, () => {
    describe(`After set(${index}, 4) - Invalid index\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tconst setValue = myLinkedList.set(${index}, 4)`, () => {
      let myLinkedList = new LinkedList(11)
      myLinkedList.push(3)
      const setValue = myLinkedList.set(index, 4)
 
      const tests = [
        [`\n\tsetValue === false`, setValue === false, 'toBe', true],
      ]

      executeTestCases(tests)
    }) 
  })
  