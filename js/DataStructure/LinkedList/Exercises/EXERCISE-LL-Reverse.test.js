import { describe } from "vitest";
import { runTests } from "../../../utils";
import LinkedList from "./EXERCISE-LL-Reverse";

describe(`EXERCISE-LL-Reverse`, () => {
  describe(`reverse()`, () => {
    describe('Before reverse()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.push(4)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: null
                }
              }
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: {
                value: 4,
                next: null
              }
            }
          }
        ],
        [
          'myLinkedList.head.next.next', myLinkedList.head.next.next, 'toEqual', {
            value: 3,
            next: {
              value: 4,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next.next.next', myLinkedList.head.next.next.next, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 4],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 4],
      ]

      runTests(tests)
    })

    describe('After reverse()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.push(4)
      const reverseValue = myLinkedList.reverse()

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 4,
            next: {
              value: 3,
              next: {
                value: 2,
                next: {
                  value: 1,
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
              value: 2,
              next: {
                value: 1,
                next: null
              }
            }
          }
        ],
        [
          'myLinkedList.head.next.next', myLinkedList.head.next.next, 'toEqual', {
            value: 2,
            next: {
              value: 1,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next.next.next', myLinkedList.head.next.next.next, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 4],
        ['reverseValue === myLinkedList', reverseValue === myLinkedList, 'toBe', true],
      ]

      runTests(tests)
    })

  })

})