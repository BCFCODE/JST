import { describe } from "vitest"
import Stack from "./EXERCISE-Stack-Constructor"
import { executeTestCases } from "../../../../utils"
import { validateConstructorOperations } from "../../tests/Constructor"

describe(`EXERCISE-Stack-Constructor`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myStack = new Stack(4)`, () => {
      let myStack = new Stack(4)

      const tests = validateConstructorOperations(myStack)

      executeTestCases(tests)
    })
  })

})


