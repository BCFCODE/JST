import { describe } from "vitest";
import { runTests } from "../../../utils";
import LinkedList from "./EXERCISE-LL-Set";

describe(`EXERCISE-LL-Set`, () => {
  describe('Before set()\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);', () => {
    let myLinkedList = new LinkedList(0)
    myLinkedList.push(1)
    myLinkedList.push(2)
    myLinkedList.push(3)

    const tests = [
      [
        'myLinkedList.head', myLinkedList.head, 'toEqual', {
          value: 0,
          next: {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: null
              }
            }
          }
        }
      ],
      [
        'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        }
      ],
      ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 0],
      ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
      ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
      [
        'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
          value: 3,
          next: null
        }
      ],
      ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
      ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
    ]

    runTests(tests)
  })

  describe('After set()\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\tmyLinkedList.set(1, 4)', () => {
    let myLinkedList = new LinkedList(0)
    myLinkedList.push(1)
    myLinkedList.push(2)
    myLinkedList.push(3)
    const setValue = myLinkedList.set(2, 99);

    const tests = [
      [
        'myLinkedList.head', myLinkedList.head, 'toEqual', {
          value: 0,
          next: {
            value: 1,
            next: {
              value: 99,
              next: {
                value: 3,
                next: null
              }
            }
          }
        }
      ],
      [
        'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
          value: 1,
          next: {
            value: 99,
            next: {
              value: 3,
              next: null
            }
          }
        }
      ],
      ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 0],
      ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
      ['myLinkedList.head.next.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
      [
        'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
          value: 3,
          next: null
        }
      ],
      ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
      ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
      ['\n\tconst setValue = myLinkedList.set(1, 4);\n\tsetValue === true >> true', setValue === true, 'toBe', true],
    ]

    runTests(tests)
  })

})