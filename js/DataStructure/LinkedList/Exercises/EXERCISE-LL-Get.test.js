import { describe, it, expect, suite } from "vitest";
import LinkedList from "./EXERCISE-LL-Get";
import { J } from "../../../utils";

describe('EXERCISE-LL-Get', () => {
  suite(`get()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(0);\n\tmyLinkedList.push(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);', () => {
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
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 0],
        ['myLinkedList.head.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
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
        ['myLinkedList.get(-1)', myLinkedList.get(-1), 'toBeUndefined', undefined],
        ['myLinkedList.get(10)', myLinkedList.get(10), 'toBeUndefined', undefined],
        [
          'myLinkedList.get(3)', myLinkedList.get(3), 'toEqual', {
            value: 3,
            next: null
          }
        ],
        [
          'myLinkedList.get(2)', myLinkedList.get(2), 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        ],
        [
          'myLinkedList.get(1)\n\t', myLinkedList.get(1), 'toEqual', {
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
        [
          'myLinkedList.get(0)\n\t', myLinkedList.get(0), 'toEqual', {
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
        ['myLinkedList.get(0).value', myLinkedList.get(0).value, 'toBe', 0],
        ['myLinkedList.get(1).value', myLinkedList.get(1).value, 'toBe', 1],
        ['myLinkedList.get(2).value', myLinkedList.get(2).value, 'toBe', 2],
        ['myLinkedList.get(3).value', myLinkedList.get(3).value, 'toBe', 3],
        [
          'myLinkedList.get(3).next', myLinkedList.get(3).next, 'toBeNull', null
        ],
        [
          'myLinkedList.get(2).next', myLinkedList.get(2).next, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        [
          'myLinkedList.get(1).next\n\t', myLinkedList.get(1).next, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        ],
        [
          'myLinkedList.get(0).next\n\t', myLinkedList.get(0).next, 'toEqual', {
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
        ["\n\tAfter calling get() method, the value must remain unchanged", myLinkedList.length, 'toBe', 4],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

  })
})