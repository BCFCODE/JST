import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Remove";
import { generateRandomValidRemoveInputs, beforeRemove, validateRemoveOperationOnInvalidIndexes, validateRemoveOperationOnValidIndexes } from "../../tests/Remove";

describe(`EXERCISE-DLL-Remove`, () => {

  describe(`remove(index)`, () => {
    describe('Before remove()\n\tlet myDoublyLinkedList = new DoublyLinkedList();\n\tmyDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(0)
      myDoublyLinkedList.push(1)
      myDoublyLinkedList.push(2)

      const tests = beforeRemove(myDoublyLinkedList)

      executeTestCases(tests)
    })

    generateRandomValidRemoveInputs().forEach((index, _, arr) => {
      const testCounts = arr.length
      describe(`${testCounts} Random Tests – Targeting Valid Indexes`, () => {
        describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(0);\n\tmyDoublyLinkedList.push(1);\n\tmyDoublyLinkedList.push(2);\n\tconst removeValue = myDoublyLinkedList.remove(${index})`, () => {
          let myDoublyLinkedList = new DoublyLinkedList(0)
          myDoublyLinkedList.push(1)
          myDoublyLinkedList.push(2)
          const removeValue = myDoublyLinkedList.remove(index)

          const tests = validateRemoveOperationOnValidIndexes({ myDoublyLinkedList, removeValue, index })

          executeTestCases(tests)
        })
      })
    });

    [-4, 4].forEach((index, _, arr) => {
      const testCounts = arr.length
      describe(`${testCounts} Random Tests – Targeting Invalid Indexes`, () => {
        describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(0);\n\tmyDoublyLinkedList.push(1);\n\tmyDoublyLinkedList.push(2);\n\tconst removeValue = myDoublyLinkedList.remove(${index})`, () => {
          let myDoublyLinkedList = new DoublyLinkedList(0)
          myDoublyLinkedList.push(1)
          myDoublyLinkedList.push(2)
          const removeValue = myDoublyLinkedList.remove(index)

          const tests = validateRemoveOperationOnInvalidIndexes({ myDoublyLinkedList, removeValue, index })

          executeTestCases(tests)
        })
      })
    })

  })

})