import { describe, suite } from "vitest";
import { runTests } from "../../../utils";
import LinkedList from "./EXERCISE-LL-Constructor";

describe('EXERCISE-LL-Constructor', () => {
  suite(`constructor()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(4);', () => {
      let myLinkedList = new LinkedList(4);

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 4],
        ['myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 4],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 1],
      ]

      runTests(tests)
    })

  })
})