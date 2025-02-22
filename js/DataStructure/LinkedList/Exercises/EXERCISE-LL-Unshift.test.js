import { describe, suite, it, expect } from "vitest"
import LinkedList from "./EXERCISE-LL-Unshift"
import { J } from "../../../utils"

describe('EXERCISE-LL-Unshift', () => {

  // Helper function for cleaner test structure
  const runTests = (tests) => {
    tests.forEach(([message, result, assertionMethod, expected]) => {
      it(`${message} >> ${J(expected)}`, () => {
        expect(result)[assertionMethod](expected);
      });
    });
  };

  describe('Before unshift() - Initial Setup\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(3);\n\t', () => {
    let myLinkedList = new LinkedList(2)
    myLinkedList.push(3)

    const beforeUnshiftTests = [
      ['myLinkedList.head', myLinkedList.head, 'toEqual', { value: 2, next: { value: 3, next: null } }],
      ['myLinkedList.head.next', myLinkedList.head.next, 'toEqual', { value: 3, next: null }],
      ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 2],
      ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
      ['myLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
      ['myLinkedList.tail', myLinkedList.tail, 'toEqual', { value: 3, next: null }],
      ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
      ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
    ];

    runTests(beforeUnshiftTests)

    describe(`Empty Linked List Scenario\n\tlet myLinkedList = new LinkedList(2)\n\tmyLinkedList.pop()`, () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.pop()

      const emptyListTests = [
        ['myLinkedList.head', myLinkedList.head, 'toBeNull', null],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        ['myLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 0],
      ];

      runTests(emptyListTests);
    })

  })

  describe('After unshift()\n\tlet myLinkedList = new LinkedList(2)\n\tmyLinkedList.push(3);\n\tmyLinkedList.unshift(1)\n\t', () => {
    let myLinkedList = new LinkedList(2)
    myLinkedList.push(3)
    myLinkedList.unshift(1)

    const afterUnshiftTests = [
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
      ['myLinkedList.head.next.next === myLinkedList.tail', myLinkedList.head.next.next === myLinkedList.tail, 'toBe', true],
      [
        'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
          value: 3,
          next: null
        }
      ],
      ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
      ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 3],
    ]

    runTests(afterUnshiftTests)


    describe(`Empty Linked List Scenario\n\tlet myLinkedList = new LinkedList(2)\n\tmyLinkedList.pop()\n\tmyLinkedList.unshift(1)`, () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.pop()
      const unshiftValue = myLinkedList.unshift(1)

      const emptyListAfterUnshiftTests = [
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
        ['myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null],
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
        ['\n\tconst unshiftValue = myLinkedList.unshift(1);\n\tunshiftValue === myLinkedList', unshiftValue === myLinkedList, 'toBe', true],
      ]

      runTests(emptyListAfterUnshiftTests);
    })
  })

})

