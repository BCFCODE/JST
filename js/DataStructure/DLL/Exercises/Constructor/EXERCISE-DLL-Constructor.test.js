import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import { validateConstructorOperations } from "../../TESTS/Constructor";
import DoublyLinkedList from "./EXERCISE-DLL-Constructor";

describe(`EXERCISE-DLL-Constructor`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(7)`, () => {
      let myDoublyLinkedList = new DoublyLinkedList(7)

      const tests = validateConstructorOperations(myDoublyLinkedList)

      executeTestCases(tests)

    })
  })

})
