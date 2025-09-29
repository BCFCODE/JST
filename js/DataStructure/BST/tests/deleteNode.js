import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests } from "../../../utils"
import CorrectBST from "./Correct"

const buildTestsForDeletingNonExistentNode = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.deleteNode(18)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left',
        'root.left.right',
        'root.right',
      ]
    }),
  ].flat()
}

const buildTestsForDeletingLeafNodeWithoutChildren = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.deleteNode(21)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left',
        'root.right',
      ]
    }),
  ].flat()
}

const deleteNodeTests = ({ BST }) => {
  describe(`deleteNode`, () => {
    describe(`\n\tDeleting a non-existent node in the tree >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.deleteNode(18)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.deleteNode(18)

      const tests = buildTestsForDeletingNonExistentNode({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tStep 1: Deleting a leaf node (no left or right children) >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.deleteNode(21)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.deleteNode(21)

      const tests = buildTestsForDeletingLeafNodeWithoutChildren({ myTree })

      executeTestCases(tests)
    })

  })
}

export default deleteNodeTests


