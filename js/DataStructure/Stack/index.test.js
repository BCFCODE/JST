import Stack from ".";
import { describe } from "vitest";
import { executeTestCases } from "../../utils";
import { constructorTests } from "./tests/Constructor";

describe(`Stack`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myStack = new Stack(4)`, () => {
      let myStack = new Stack(4)

      const tests = constructorTests(myStack)

      executeTestCases(tests)
    })
  })
 

}) 

