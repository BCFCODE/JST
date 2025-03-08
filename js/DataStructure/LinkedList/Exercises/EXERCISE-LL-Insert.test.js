import { describe, suite } from "vitest";
import { runTests } from "../../../utils";
import LinkedList from "./EXERCISE-LL-Insert";

describe(`EXERCISE-LL-Insert`, () => {
  suite(`insert(index, value)`, () => {
    describe('Before insert(index, value)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(3);', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(3);

      const tests = [
        [
          '\n\tmyLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 3,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        ['myLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      runTests(tests)
    })

    describe('After insert(index, value)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(3);\n\tmyLinkedList.insert(1, 2);', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(3)
      const insertValue = myLinkedList.insert(1, 2)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
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
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.next.next', myLinkedList.head.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 3],
        ['\n\tconst insertValue = myLinkedList.insert(1, 2);\n\tinsertValue', insertValue, 'toBe', true],
      ]

      runTests(tests)
    })
    
  })
})