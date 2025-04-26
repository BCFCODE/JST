import { describe } from "vitest"
import { executeTestCases } from "../../../../utils"
import { afterFirstPop, afterSecondPop, afterThirdPop, beforePop } from "../../TESTS/Pop"
import LinkedList from "./EXERCISE-LL-Pop"

describe('EXERCISE-LL-Pop', () => {

  describe('Before pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.pop(2);', () => {
    let myLinkedList = new LinkedList(1)
    myLinkedList.push(2)

    const tests = beforePop(myLinkedList)

    executeTestCases(tests)
  })

  describe('After first pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tconst popValue = myLinkedList.pop()', () => {
    let myLinkedList = new LinkedList(1)
    myLinkedList.push(2)
    const popValue = myLinkedList.pop()

    const tests = afterFirstPop(myLinkedList, popValue)

    executeTestCases(tests)
  })

  describe('After second pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop()\n\tconst popValue = myLinkedList.pop()', () => {
    let myLinkedList = new LinkedList(1)
    myLinkedList.push(2)
    myLinkedList.pop()
    const popValue = myLinkedList.pop()

    const tests = afterSecondPop(myLinkedList, popValue)

    executeTestCases(tests)
  })

  describe('After third pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop()\n\tmyLinkedList.pop()\n\tconst popValue = myLinkedList.pop()', () => {
    let myLinkedList = new LinkedList(1)
    myLinkedList.push(2)
    myLinkedList.pop()
    myLinkedList.pop()
    const popValue = myLinkedList.pop()

    const tests = afterThirdPop(myLinkedList, popValue)

    executeTestCases(tests)
  })

})

