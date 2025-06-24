import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Pop";
import { afterFirstPop, afterSecondPop, afterThirdPop, beforePop } from "../../TESTS/Pop";

describe(`EXERCISE-DLL-Pop`, () => {
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