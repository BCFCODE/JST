import { describe } from "vitest";
import { DoublyLinkedList } from '.'
import { checkDLLInternalStructure, executeTestCases } from "../../utils";
import { afterFirstPop, afterSecondPop, afterThirdPop, beforePop } from "./TESTS/Pop";
import { beforeUnshift, afterFirstUnshift, afterSecondUnshift } from "./TESTS/Unshift";
import { afterFirstShift, afterSecondShift, afterThirdShift, beforeShift } from "./TESTS/Shift";
import { afterGetIndex0, afterGetIndex1, afterGetIndex2, afterGetIndex3, afterGetOutOfRangeIndex, beforeGet, outOfRangeTests } from "./TESTS/Get";

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
    describe('Before pop()\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)

      const tests = beforePop(myDoublyLinkedList)

      executeTestCases(tests)
    })

    describe('After first pop()\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      const popValue = myDoublyLinkedList.pop()

      const tests = afterFirstPop(myDoublyLinkedList, popValue)

      executeTestCases(tests)
    })

    describe('After second pop()\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.pop()\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.pop()
      const popValue = myDoublyLinkedList.pop()

      const tests = afterSecondPop(myDoublyLinkedList, popValue)

      executeTestCases(tests)
    })

    describe('After third pop()\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.pop()\n\tmyDoublyLinkedList.pop()\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.pop()
      myDoublyLinkedList.pop()
      const popValue = myDoublyLinkedList.pop()

      const tests = afterThirdPop(myDoublyLinkedList, popValue)

      executeTestCases(tests)
    })
  })

  describe(`unshift()`, () => {
    describe('Before unshift()\n\tlet myDoublyLinkedList = new DoublyLinkedList();\n\tmyDoublyLinkedList.pop();', () => {
      let myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.pop()

      const tests = beforeUnshift(myDoublyLinkedList)

      executeTestCases(tests)
    })

    describe('After first unshift()\n\tlet myDoublyLinkedList = new DoublyLinkedList();\n\tmyDoublyLinkedList.pop();\n\tconst unshiftValue = myDoublyLinkedList.unshift(2)', () => {
      let myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.pop()
      const unshiftValue = myDoublyLinkedList.unshift(2)

      const tests = afterFirstUnshift(myDoublyLinkedList, unshiftValue)

      executeTestCases(tests)
    })

    describe('After second unshift()\n\tlet myDoublyLinkedList = new DoublyLinkedList();\n\tmyDoublyLinkedList.pop();\n\tmyDoublyLinkedList.unshift(2)\n\tconst unshiftValue = myDoublyLinkedList.unshift(1)', () => {
      let myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.pop()
      myDoublyLinkedList.unshift(2)
      const unshiftValue = myDoublyLinkedList.unshift(1)

      const tests = afterSecondUnshift(myDoublyLinkedList, unshiftValue)

      executeTestCases(tests)
    })

  })

  describe(`shift()`, () => {
    describe('Before shift()\n\tlet myDoublyLinkedList = new DoublyLinkedList(2);\n\tmyDoublyLinkedList.push(1);', () => {
      let myDoublyLinkedList = new DoublyLinkedList(2)
      myDoublyLinkedList.push(1)

      const tests = beforeShift(myDoublyLinkedList)

      executeTestCases(tests)
    })

    describe('After first shift()\n\tlet myDoublyLinkedList = new DoublyLinkedList(2);\n\tmyDoublyLinkedList.push(1);\n\tconst shiftValue = myDoublyLinkedList.shift()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(2)
      myDoublyLinkedList.push(1)
      const shiftValue = myDoublyLinkedList.shift()

      const tests = afterFirstShift(myDoublyLinkedList, shiftValue)

      executeTestCases(tests)
    })

    describe('After second shift()\n\tlet myDoublyLinkedList = new DoublyLinkedList(2);\n\tmyDoublyLinkedList.push(1);\n\tmyDoublyLinkedList.shift()\n\tconst shiftValue = myDoublyLinkedList.shift()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(2)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.shift()
      const shiftValue = myDoublyLinkedList.shift()

      const tests = afterSecondShift(myDoublyLinkedList, shiftValue)

      executeTestCases(tests)
    })

    describe('After third shift()\n\tlet myDoublyLinkedList = new DoublyLinkedList(2);\n\tmyDoublyLinkedList.push(1);\n\tmyDoublyLinkedList.shift()\n\tmyDoublyLinkedList.shift()\n\tconst shiftValue = myDoublyLinkedList.shift()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(2)
      myDoublyLinkedList.push(1)
      myDoublyLinkedList.shift()
      myDoublyLinkedList.shift()
      const shiftValue = myDoublyLinkedList.shift()

      const tests = afterThirdShift(myDoublyLinkedList, shiftValue)

      executeTestCases(tests)
    })

  })

  describe(`get()`, () => {
    describe('Before get()\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tmyDoublyLinkedList.push(4);', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.push(3)
      myDoublyLinkedList.push(4)

      const tests = beforeGet(myDoublyLinkedList)

      executeTestCases(tests)
    })

    describe('After get(3)\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tmyDoublyLinkedList.push(4);\n\tconst getValue = myDoublyLinkedList.get(3)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.push(3)
      myDoublyLinkedList.push(4)
      const getValue = myDoublyLinkedList.get(3)

      const tests = afterGetIndex3(myDoublyLinkedList, getValue)

      executeTestCases(tests)
    })

    describe('After get(2)\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tmyDoublyLinkedList.push(4);\n\tconst getValue = myDoublyLinkedList.get(2)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.push(3)
      myDoublyLinkedList.push(4)
      const getValue = myDoublyLinkedList.get(2)

      const tests = afterGetIndex2(myDoublyLinkedList, getValue)

      executeTestCases(tests)
    })

    describe('After get(1)\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tmyDoublyLinkedList.push(4);\n\tconst getValue = myDoublyLinkedList.get(1)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.push(3)
      myDoublyLinkedList.push(4)
      const getValue = myDoublyLinkedList.get(1)

      const tests = afterGetIndex1(myDoublyLinkedList, getValue)

      executeTestCases(tests)
    })

    describe('After get(0)\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tmyDoublyLinkedList.push(4);\n\tconst getValue = myDoublyLinkedList.get(0)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.push(3)
      myDoublyLinkedList.push(4)
      const getValue = myDoublyLinkedList.get(0)

      const tests = afterGetIndex0(myDoublyLinkedList, getValue)

      executeTestCases(tests)
    });

    [-120, -1, -10, 100, 5].forEach(index => {
      describe(`After get(${index})\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tmyDoublyLinkedList.push(4);\n\tconst getValue = myDoublyLinkedList.get(${index})`, () => {
        let myDoublyLinkedList = new DoublyLinkedList(1)
        myDoublyLinkedList.push(2)
        myDoublyLinkedList.push(3)
        myDoublyLinkedList.push(4)
        const getValue = myDoublyLinkedList.get(index)

        const tests = afterGetOutOfRangeIndex(myDoublyLinkedList, getValue)

        executeTestCases(tests)
      })
    })

  })

})
