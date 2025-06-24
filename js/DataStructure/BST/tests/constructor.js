import { describe } from "vitest"
import { checkBSTInternalStructure, executeTestCases, toBeNullTests } from "../../../utils"
import CorrectBST from "./Correct"

const validateConstructorOperations = ({ myTree, Node }) => {
  let correct = new CorrectBST()

  return [
    checkBSTInternalStructure({ Node }),
    toBeNullTests({ name: 'myTree', my: myTree, correct, paths: ['root'] })
  ].flat()

}

const constructorTests = ({ BST, Node }) => {
  describe(`constructor`, () => {
    describe(`\n\tlet myTree = new BST()`, () => {
      let myTree = new BST()

      const tests = validateConstructorOperations({ BST, myTree, Node })

      executeTestCases(tests)
    })
  })
}

export default constructorTests


