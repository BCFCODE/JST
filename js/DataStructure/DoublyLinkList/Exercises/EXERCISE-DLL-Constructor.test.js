import DoublyLinkedList from "./EXERCISE-DLL-Constructor";
import { describe, it, expect, describe } from "vitest";
import { J, runTests } from "../../../utils";

describe(`EXERCISE-DLL-Constructor`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(7)`, () => {
      let myDoublyLinkedList = new DoublyLinkedList(7)

      const tests = [
        [
          '\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toEqual', {
            value: 7,
            next: null,
            prev: null
          }
        ],
        ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 7],
        ['\n\tmyDoublyLinkedList.head.next', myDoublyLinkedList.head.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head === myDoublyLinkedList.tail', myDoublyLinkedList.head === myDoublyLinkedList.tail, 'toBe', true],
        [
          '\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toEqual', {
            value: 7,
            next: null,
            prev: null
          }
        ],
        ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 7],
        ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.prev', myDoublyLinkedList.tail.prev, 'toBeNull', null],
        ["\n\tmyDoublyLinkedList.length", myDoublyLinkedList.length, 'toBe', 1],
      ]

      runTests(tests)

    })
  })

})
