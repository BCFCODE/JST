import { describe, it, expect, vi, suite } from "vitest";
import LinkedList from "./EXERCISE-LL-Shift";
import { J } from "../../../utils";

describe('EXERCISE-LL-Shift', () => {
  suite(`shift()`, () => {
    describe('Before shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);', () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.push(1)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 2,
            next: {
              value: 1,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 2],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        ['myLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('After first shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);\n\tmyLinkedList.shift();', () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.push(1)
      myLinkedList.shift()

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 1],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('After second shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);\n\tmyLinkedList.shift();\n\tmyLinkedList.shift();', () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.push(1)
      myLinkedList.shift()
      myLinkedList.shift()

      const tests = [
        ['myLinkedList.head', myLinkedList.head, 'toBeNull', null],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        ['myLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 0],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

  })
})