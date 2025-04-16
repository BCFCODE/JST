import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import DoublyLinkedList from "./EXERCISE-DLL-Push";
import pushTests from "../../TESTS/Push";

describe(`EXERCISE-DLL-Push`, () => {

  describe(`push()`, () => {
    describe('\n\tlet myDoublyLinkedList = new DoublyLinkedList(1)\n\tmyDoublyLinkedList.push(2)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      const pushValue = myDoublyLinkedList.push(2)

      const tests = pushTests(myDoublyLinkedList, pushValue)

      executeTestCases(tests)
    })

  })

})