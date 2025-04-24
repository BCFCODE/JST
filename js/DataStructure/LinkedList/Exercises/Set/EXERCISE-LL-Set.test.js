import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import LinkedList from "./EXERCISE-LL-Set";

describe(`EXERCISE-LL-Set`, () => {

  describe('Before set(index, value)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);', () => {
    let myLinkedList = new LinkedList(11)
    myLinkedList.push(3)
    myLinkedList.push(23)
    myLinkedList.push(7)

    const tests = [
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
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
    ]

    executeTestCases(tests)
  })

  describe('After set(index, value)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\tmyLinkedList.set(1, 4)', () => {
    let myLinkedList = new LinkedList(11)
    myLinkedList.push(3)
    myLinkedList.push(23)
    myLinkedList.push(7)
    const setValue = myLinkedList.set(1, 4)

    const tests = [
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

    executeTestCases(tests)
  })

  describe('After set(index, value)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.set(-1, 4)', () => {
    let myLinkedList = new LinkedList(11)
    myLinkedList.push(3)
    const setValue = myLinkedList.set(-1, 4)

    const tests = [
      ['\n\tconst setValue = myLinkedList.set(-1, 4);\n\tsetValue === false >> true', setValue === false, 'toBe', true],
    ]

    executeTestCases(tests)
  })

  describe('After set(index, value)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.set(5, 4)', () => {
    let myLinkedList = new LinkedList(11)
    myLinkedList.push(3)
    const setValue = myLinkedList.set(5, 4)

    const tests = [
      ['\n\tconst setValue = myLinkedList.set(-1, 4);\n\tsetValue === false >> true', setValue === false, 'toBe', true],
    ]

    executeTestCases(tests)
  })

})