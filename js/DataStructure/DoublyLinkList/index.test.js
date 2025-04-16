import { describe } from "vitest";
import { DoublyLinkedList } from '.'
import { checkDLLInternalStructure, executeTestCases } from "../../utils";
import { afterFirstPop, afterSecondPop, afterThirdPop, beforePop } from "./TESTS/Pop";

describe(`DoublyLinkedList`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(7)`, () => {
      let myDoublyLinkedList = new DoublyLinkedList(7)

      const tests = [
        ...checkDLLInternalStructure(myDoublyLinkedList),
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

      executeTestCases(tests)

    })



  })

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
        ...checkDLLInternalStructure(myDoublyLinkedList),
        ...headTests, ...tailTests,
        ['myDoublyLinkedList.length', myDoublyLinkedList.length, 'toEqual', 2],
        ['\n\tconst pushValue = myDoublyLinkedList.push(2); \n\tpushValue === myDoublyLinkedList', pushValue === myDoublyLinkedList, 'toBe', true]
      ]

      executeTestCases(tests)
    })

  })

  describe(`pop()`, () => {
    describe('Before pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)

      const tests = beforePop(myDoublyLinkedList)

      executeTestCases(tests)
    })

    describe('After first pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      const popValue = myDoublyLinkedList.pop()

      const tests = afterFirstPop(myDoublyLinkedList, popValue)

      executeTestCases(tests)
    })

    describe('After second pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.pop()\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.pop()
      const popValue = myDoublyLinkedList.pop()

      const tests = afterSecondPop(myDoublyLinkedList, popValue)

      executeTestCases(tests)
    })

    describe('After third pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.pop()\n\tmyDoublyLinkedList.pop()\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.pop()
      myDoublyLinkedList.pop()
      const popValue = myDoublyLinkedList.pop()

      const tests = afterThirdPop(myDoublyLinkedList, popValue)

      executeTestCases(tests)
    })
  })

})
