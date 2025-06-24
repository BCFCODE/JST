import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Get";
import { beforeGet, afterGetIndex0, afterGetIndex1, afterGetIndex2, afterGetIndex3, afterGetOutOfRangeIndex } from "../../TESTS/Get";

describe(`EXERCISE-DLL-Get`, () => {

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