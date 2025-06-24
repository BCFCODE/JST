import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Unshift";
import { afterFirstUnshift, afterSecondUnshift, beforeUnshift } from "../../TESTS/Unshift";


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
