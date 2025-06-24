import { describe } from "vitest"
import { executeTestCases } from "../../../../utils"
import { afterFirstUnshift, afterSecondUnshift, beforeUnshift } from "../../TESTS/Unshift"
import LinkedList from "./EXERCISE-LL-Unshift"

describe('EXERCISE-LL-Unshift', () => {

  describe('Before unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();', () => {
    let myLinkedList = new LinkedList()
    myLinkedList.pop()

    const tests = beforeUnshift(myLinkedList)

    executeTestCases(tests)
  })

  describe('After first unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tconst unshiftValue = myLinkedList.unshift(2)', () => {
    let myLinkedList = new LinkedList()
    myLinkedList.pop()
    const unshiftValue = myLinkedList.unshift(2)

    const tests = afterFirstUnshift(myLinkedList, unshiftValue)

    executeTestCases(tests)
  })

  describe('After second unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.unshift(2)\n\tconst unshiftValue = myLinkedList.unshift(1)', () => {
    let myLinkedList = new LinkedList()
    myLinkedList.pop()
    myLinkedList.unshift(2)
    const unshiftValue = myLinkedList.unshift(1)

    const tests = afterSecondUnshift(myLinkedList, unshiftValue)

    executeTestCases(tests)
  })

})

