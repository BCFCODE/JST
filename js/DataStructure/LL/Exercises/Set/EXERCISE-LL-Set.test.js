import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import LinkedList from "./EXERCISE-LL-Set";
import { afterSet4ToIndex1, beforeSet, invalidIndexTestsForSet } from "../../TESTS/Set";

describe(`EXERCISE-LL-Set`, () => {

  describe('Before set(index, value)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);', () => {
    let myLinkedList = new LinkedList(11)
    myLinkedList.push(3)
    myLinkedList.push(23)
    myLinkedList.push(7)

    const tests = beforeSet(myLinkedList)

    executeTestCases(tests)
  })

  describe('After set(1, 4)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\tmyLinkedList.set(1, 4)', () => {
    let myLinkedList = new LinkedList(11)
    myLinkedList.push(3)
    myLinkedList.push(23)
    myLinkedList.push(7)
    const setValue = myLinkedList.set(1, 4)

    const tests = afterSet4ToIndex1(myLinkedList, setValue)

    executeTestCases(tests)
  })

});

// Out of range tests
[-1, 2, 7, -100].forEach(index => invalidIndexTestsForSet(LinkedList, index))

 
 