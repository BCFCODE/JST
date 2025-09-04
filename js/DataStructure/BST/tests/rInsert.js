import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests, toEqualTests } from "../../../utils"
import CorrectBST from "./Correct"

const validateBeforeInsertOperations = (myTree) => {
  let correct = new CorrectBST()

  return [
    toBeNullTests({ name: 'myTree', my: myTree, correct, paths: ['root'] })
  ].flat()

}

const validateAfterInsert47Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: ['root.value']
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: ['root.left', 'root.right']
    }),
  ].flat()

}

const validateAfterInsert21Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: ['root.value', 'root.left.value']
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.right',
        'root.left.left',
        'root.left.right'
      ]
    }),
  ].flat()

}

const validateAfterInsert76Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.right.value'
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

const validateAfterInsert18Operations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.rInsert(18)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.left.left.value',
        'root.right.value'
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left.left',
        'root.left.left.right',
        'root.left.right',
        'root.right.left',
        'root.right.right',
      ]
    }),
  ].flat()
}

const validateAfterInsertDuplicationOperations = ({ myTree }) => {
  let correct = new CorrectBST()
  correct.rInsert(47)
  correct.rInsert(21)
  correct.rInsert(76)
  correct.rInsert(18)
  correct.rInsert(76)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.value',
        'root.left.value',
        'root.left.left.value',
        'root.right.value'
      ]
    }),
    toBeNullTests({
      name: 'myTree',
      my: myTree,
      correct,
      paths: [
        'root.left.left.left',
        'root.left.left.right',
        'root.left.right',
        'root.right.left',
        'root.right.right',
      ]
    }),
  ].flat()
}

const rInsertTests = ({ BST }) => {
  describe(`rInsert`, () => {
    describe(`\n\tlet myTree = new BST()`, () => {
      const myTree = new BST();

      const tests = validateBeforeInsertOperations(myTree)

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)

      const tests = validateAfterInsert47Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)

      const tests = validateAfterInsert21Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)

      const tests = validateAfterInsert76Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(18)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.rInsert(18)

      const tests = validateAfterInsert18Operations({ myTree })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(18)\n\tmyTree.rInsert(76)`, () => {
      let myTree = new BST()
      myTree.rInsert(47)
      myTree.rInsert(21)
      myTree.rInsert(76)
      myTree.rInsert(18)
      myTree.rInsert(76)

      const tests = validateAfterInsertDuplicationOperations({ myTree })

      executeTestCases(tests)
    })
  })
}

export default rInsertTests


