import { describe } from "vitest"
import { checkBSTInternalStructure, executeTestCases, toBeNullTests } from "../../../utils"
import BST, { Node } from "../Lessons"

const buildExpectedBSTConstructor = () => {
  let myTree = new BST()
  return { correct: myTree }
}

export const validateConstructorOperations = (BST, myTree) => {
  const { correct } = buildExpectedBSTConstructor(BST)

  return [
    checkBSTInternalStructure({ newNode: new Node() }),
    toBeNullTests({ name: 'myTree', my: myTree, correct: correct.myTree, paths: ['root'] })
  ].flat()

}

export const constructorTests = (BST) => {
  describe(`constructor`, () => {
    describe(`\n\tlet myTree = new BST(4)`, () => {
      let myTree = new BST()

      const tests = validateConstructorOperations(BST, myTree)

      executeTestCases(tests)
    })
  })
}



