import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Set";
import { beforeSet, generateRandomValidSetInputs, validateSetOperationOnInvalidIndexes, validateSetOperationOnValidIndexes } from "../../TESTS/Set";

describe(`EXERCISE-DLL-Set`, () => {

  describe(`set()`, () => {
    describe('Before set()\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.push(3)

      const tests = beforeSet(myDoublyLinkedList)

      executeTestCases(tests)
    })

    generateRandomValidSetInputs().forEach(({ index, value }, i, arr) => {
      const testCounts = arr.length
      describe(`${testCounts} Random Tests – Targeting Valid Indexes`, () => {
        describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tconst setValue = myDoublyLinkedList.set(${index}, ${value})`, () => {
          let myDoublyLinkedList = new DoublyLinkedList(1)
          myDoublyLinkedList.push(2)
          myDoublyLinkedList.push(3)
          const setValue = myDoublyLinkedList.set(index, value)

          const tests = validateSetOperationOnValidIndexes({ myDoublyLinkedList, setValue, index, value })

          executeTestCases(tests)
        })
      })
    });

    [{ index: -1, value: 10 }, { index: 4, value: 10 }].forEach(({ index, value }, i, arr) => {
      const testCounts = arr.length
      describe(`${testCounts} Random Tests – Targeting Invalid Indexes`, () => {
        describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tconst setValue = myDoublyLinkedList.set(${index}, ${value})`, () => {
          let myDoublyLinkedList = new DoublyLinkedList(1)
          myDoublyLinkedList.push(2)
          myDoublyLinkedList.push(3)
          const setValue = myDoublyLinkedList.set(index, value)

          const tests = validateSetOperationOnInvalidIndexes({ myDoublyLinkedList, setValue, index, value })

          executeTestCases(tests)
        })
      })
    })

  })

})