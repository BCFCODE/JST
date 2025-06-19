import { describe } from "vitest"
import { checkBSTInternalStructure, executeTestCases, toBeNullTests } from "../../../utils"

const buildExpectedBSTConstructor = (BST) => {
  let myTree = new BST()
  return { correct: myTree }
}

export const validateConstructorOperations = ({ BST, myTree, Node }) => {
  const { correct } = buildExpectedBSTConstructor(BST)

  return [
    checkBSTInternalStructure({ Node }),
    toBeNullTests({ name: 'myTree', my: myTree, correct: correct.myTree, paths: ['root'] })
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


