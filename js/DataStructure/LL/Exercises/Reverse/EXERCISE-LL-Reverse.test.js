import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import LinkedList from "./EXERCISE-LL-Reverse";
import { afterReverse, beforeReverse } from "../../TESTS/Reverse";

describe(`EXERCISE-LL-Reverse`, () => {

  describe('Before reverse()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);', () => {
    let myLinkedList = new LinkedList(1)
    myLinkedList.push(2)
    myLinkedList.push(3)
    myLinkedList.push(4)

    const tests = beforeReverse(myLinkedList)

    executeTestCases(tests)
  })

  describe('After reverse()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);', () => {
    let myLinkedList = new LinkedList(1)
    myLinkedList.push(2)
    myLinkedList.push(3)
    myLinkedList.push(4)
    const reverseValue = myLinkedList.reverse()

    const tests = afterReverse(myLinkedList, reverseValue)

    executeTestCases(tests)
  })

})