import { describe, it, expect, vi, suite } from "vitest";
import LinkedList from "./EXERCISE-LL-Push";
import { J } from "../../../utils";

describe(`EXERCISE-LL-Push`, () => {
  suite(`push()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(7)\n\tmyLinkedList.push(4)\n\t', () => {
      let myLinkedList = new LinkedList(7)
      myLinkedList.push(4)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 7,
            next: {
              value: 4,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 7],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 7],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toEqual', 4],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toEqual', 4],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })
  })
})