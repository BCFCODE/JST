import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests } from "../../../utils"
import CorrectBST from "./Correct"

const validateAfterDeleteNode18Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.rInsert(18)
  correct.rInsert(27)
  correct.rInsert(52)
  correct.rInsert(82)
  correct.deleteNode(18)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.right.value',
        'root.left.right.value',
        'root.right.left.value',
        'root.right.right.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left',
        'root.left.right.left',
        'root.left.right.right',
        'root.right.left.left',
        'root.right.left.right',
        'root.right.right.left',
        'root.right.right.right',
      ]
    }),
  ].flat()
}

const validateAfterDeleteNode27Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.rInsert(27)
  correct.rInsert(52)
  correct.rInsert(82)
  correct.deleteNode(27)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.right.value',
        'root.right.left.value',
        'root.right.right.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left',
        'root.left.right',
        'root.right.left.left',
        'root.right.left.right',
        'root.right.right.left',
        'root.right.right.right',
      ]
    }),
  ].flat()
}

const validateAfterDeleteNode52Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.rInsert(52)
  correct.rInsert(82)
  correct.deleteNode(52)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.right.value',
        'root.right.right.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left',
        'root.left.right',
        'root.right.left',
        'root.right.right.left',
        'root.right.right.right',
      ]
    }),
  ].flat()
}

const validateAfterDeleteNode82Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.rInsert(82)
  correct.deleteNode(82)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.right.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left',
        'root.left.right',
        'root.right.left',
        'root.right.right',
      ]
    }),
  ].flat()
}

const validateAfterDeleteNode21Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.deleteNode(21)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.right.value',
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left',
        'root.right.left',
        'root.right.right',
      ]
    }),
  ].flat()
}

const validateAfterDeleteNode76Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(76)
  correct.deleteNode(76)

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
    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(18)\n\tmyTree.rInsert(27)\n\tmyTree.rInsert(52)\n\tmyTree.rInsert(82)\n\tmyTree.deleteNode(18)\n\tconst returnedMinValue = myTree.minValue(47)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.rInsert(18)
      myTree.rInsert(27)
      myTree.rInsert(52)
      myTree.rInsert(82)
      myTree.deleteNode(18)

      const tests = validateAfterDeleteNode18Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(27)\n\tmyTree.rInsert(52)\n\tmyTree.rInsert(82)\n\tmyTree.deleteNode(27)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.rInsert(27)
      myTree.rInsert(52)
      myTree.rInsert(82)
      myTree.deleteNode(27)

      const tests = validateAfterDeleteNode27Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(52)\n\tmyTree.rInsert(82)\n\tmyTree.deleteNode(52)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.rInsert(52)
      myTree.rInsert(82)
      myTree.deleteNode(52)

      const tests = validateAfterDeleteNode52Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(82)\n\tmyTree.deleteNode(82)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.rInsert(82)
      myTree.deleteNode(82)

      const tests = validateAfterDeleteNode82Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.deleteNode(21)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.deleteNode(21)

      const tests = validateAfterDeleteNode21Operations({ myTree })

      executeTestCases(tests)
    })

  })
}

export default deleteNodeTests


