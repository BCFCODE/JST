import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Insert";
import { beforeInsert, generateRandomValidInsertInputs, validateInsertOperationOnInvalidIndexes, validateInsertOperationOnValidIndexes } from "../../TESTS/Insert";

describe(`EXERCISE-DLL-Insert`, () => {

  describe(`insert(index, value)`, () => {
    describe('Before insert()\n\tlet myDoublyLinkedList = new DoublyLinkedList();\n\tmyDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.pop()

      const tests = beforeInsert(myDoublyLinkedList)

      executeTestCases(tests)
    })

    generateRandomValidInsertInputs().forEach(({ index, value }, i, arr) => {
      const testCounts = arr.length
      describe(`${testCounts} Random Tests – Targeting Valid Indexes`, () => {
        describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tconst insertValue = myDoublyLinkedList.insert(${index}, ${value})`, () => {
          let myDoublyLinkedList = new DoublyLinkedList(1)
          myDoublyLinkedList.push(2)
          myDoublyLinkedList.push(3)
          const insertValue = myDoublyLinkedList.insert(index, value)

          const tests = validateInsertOperationOnValidIndexes({ myDoublyLinkedList, insertValue, index, value })

          executeTestCases(tests)
        })
      })
    });

    [
      { index: -1, value: 10 },
      { index: 4, value: 10 }
    ].forEach(({ index, value }, i, arr) => {
      const testCounts = arr.length
      describe(`${testCounts} Random Tests – Targeting Invalid Indexes`, () => {
        describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.push(3);\n\tconst insertValue = myDoublyLinkedList.insert(${index}, ${value})`, () => {
          let myDoublyLinkedList = new DoublyLinkedList(1)
          myDoublyLinkedList.push(2)
          myDoublyLinkedList.push(3)
          const insertValue = myDoublyLinkedList.insert(index, value)

          const tests = validateInsertOperationOnInvalidIndexes({ myDoublyLinkedList, insertValue, index, value })

          executeTestCases(tests)
        })
      })
    })

  })

})