import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Shift";
import { beforeShift, afterFirstShift, afterSecondShift, afterThirdShift } from "../../TESTS/Shift";

describe(`EXERCISE-DLL-Shift`, () => {
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
})
