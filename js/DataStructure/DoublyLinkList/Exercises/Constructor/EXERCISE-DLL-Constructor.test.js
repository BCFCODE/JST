import { describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import { constructorTests } from "../../TESTS/Constructor";
import DoublyLinkedList from "./EXERCISE-DLL-Constructor";

describe(`EXERCISE-DLL-Constructor`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(7)`, () => {
      let myDoublyLinkedList = new DoublyLinkedList(7)

      const tests = constructorTests(myDoublyLinkedList)

      executeTestCases(tests)

    })
  })

})
