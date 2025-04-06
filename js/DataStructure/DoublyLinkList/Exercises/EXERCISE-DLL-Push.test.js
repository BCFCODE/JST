import { describe } from "vitest";
import { runTests } from "../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Push";

describe(`EXERCISE-DLL-Push`, () => {

  describe(`push()`, () => {
    describe('\n\tlet myDoublyLinkedList = new DoublyLinkedList(1)\n\tmyDoublyLinkedList.push(2)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      const pushValue = myDoublyLinkedList.push(2)

      const headTests = [
        ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.head.next.next', myDoublyLinkedList.head.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head.next.value', myDoublyLinkedList.head.next.value, 'toBe', 2],
        ['\n\tmyDoublyLinkedList.head.next.prev.value', myDoublyLinkedList.head.next.prev.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.head.next.prev.prev', myDoublyLinkedList.head.next.prev.prev, 'toBeNull', null],
      ]

      const tailTests = [
        ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 2],
        ['\n\tmyDoublyLinkedList.tail.prev.value', myDoublyLinkedList.tail.prev.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.tail.prev.prev', myDoublyLinkedList.tail.prev.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.prev.next.next', myDoublyLinkedList.tail.prev.next.next, 'toBeNull', null],
      ]

      const tests = [
        ...headTests, ...tailTests,
        ['myDoublyLinkedList.length', myDoublyLinkedList.length, 'toEqual', 2],
        ['\n\tconst pushValue = myDoublyLinkedList.push(2); \n\tpushValue === myDoublyLinkedList', pushValue === myDoublyLinkedList, 'toBe', true]
      ]

      runTests(tests)
    })

  })

})