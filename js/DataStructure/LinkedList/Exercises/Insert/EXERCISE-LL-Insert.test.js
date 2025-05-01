import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import LinkedList from "./EXERCISE-LL-Insert";
import { afterFirstInsert, afterSecondInsert, afterThirdInsert, beforeInsert, invalidIndexTestsForInsert } from "../../TESTS/Insert";

describe(`EXERCISE-LL-Insert`, () => {
  describe(`insert(index, value)`, () => {
    describe(`Before insert(index, value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()

      const tests = beforeInsert(myLinkedList)

      executeTestCases(tests)
    })

    describe(`let myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tconst insertValue = myLinkedList.insert(0, 1)`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      const insertValue = myLinkedList.insert(0, 1)

      const tests = afterFirstInsert(myLinkedList, insertValue)

      executeTestCases(tests)
    })

    describe(`let myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.insert(0, 1)\n\tconst insertValue = myLinkedList.insert(0, 'New value in the beginning')`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      myLinkedList.insert(0, 1)
      const insertValue = myLinkedList.insert(0, 'New value in the beginning')

      const tests = afterSecondInsert(myLinkedList, insertValue)

      executeTestCases(tests)
    });

    describe(`let myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.insert(0, 1)\n\tmyLinkedList.insert(0, 'New value in the beginning')\n\tconst insertValue = myLinkedList.insert(1, 'New value in the middle')`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      myLinkedList.insert(0, 1)
      myLinkedList.insert(0, 'New value in the beginning')
      const insertValue = myLinkedList.insert(1, 'New value in the middle')

      const tests = afterThirdInsert(myLinkedList, insertValue)

      executeTestCases(tests)
    });

    // Out of range tests
    [-30, -1, 3, 999].forEach(index => invalidIndexTestsForInsert(LinkedList, index))

  })
})

