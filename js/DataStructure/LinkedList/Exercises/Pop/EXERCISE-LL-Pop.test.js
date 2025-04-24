import { describe, it, expect, vi, suite } from "vitest";
import LinkedList from "./EXERCISE-LL-Pop";
import { J } from "../../../../utils";

describe(`EXERCISE-LL-Pop`, () => {
  suite(`pop()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 1],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toEqual', 2],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 2,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toEqual', 2],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toEqual', {
            value: 2,
            next: null
          }
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 1],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.pop()
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toBeNull', null
        ],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toBeNull', null
        ],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 0],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })
    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.pop()
      myLinkedList.pop()
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toBeUndefined'
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toBeNull', null
        ],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toBeNull', null
        ],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 0],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })
  })
})