import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import LinkedList from "./EXERCISE-LL-Push";

describe('EXERCISE-LL-Push', () => {
  describe(`push(value)`, () => {
    describe('Before push(value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop(); (length = 0)', () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toBeNull', null
        ],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toBeNull', null
        ],
        ['myLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 0],
      ]

      executeTestCases(tests)
    })

    describe('After first push(value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.push(7);', () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      const pushValue = myLinkedList.push(7)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 7,
            next: null
          }
        ],
        ['myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 7],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 7,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 7],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['pushValue === myLinkedList', pushValue === myLinkedList, 'toBe', true],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 1],
      ]

      executeTestCases(tests)
    })

    describe('After second push(value)\n\tlet myLinkedList = new LinkedList();\n\t myLinkedList.pop();\n\tmyLinkedList.push(7)\n\tmyLinkedList.push(4)', () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      myLinkedList.push(7)
      const pushValue = myLinkedList.push(4)

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
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 7],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 4],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['pushValue === myLinkedList', pushValue === myLinkedList, 'toBe', true],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 2],
      ]

      executeTestCases(tests)
    })

  })
})