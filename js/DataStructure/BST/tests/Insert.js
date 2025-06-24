import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests, toEqualTests } from "../../../utils"
import CorrectBST from "./Correct"

const validateBeforeInsertOperations = (myTree) => {
  let correct = new CorrectBST()

  return [
    toBeNullTests({ name: 'myTree', my: myTree, correct, paths: ['root'] })
  ].flat()

}

const validateAfterInsert47Operations = ({ myTree, returnValue }) => {
  let correct = new CorrectBST()
  const correctReturnValue = correct.insert(47)

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
    toBeTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: ['root.value']
    }),
    toBeNullTests({
      name: 'returnValue',
      my: returnValue,
      correct: correct.returnValue,
      paths: ['root.left', 'root.right']
    }),
  ].flat()

}

const validateAfterInsert21Operations = ({ myTree, returnValue }) => {
  let correct = new CorrectBST()
  correct.insert(47)
  const correctReturnValue = correct.insert(21)

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
    toBeTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: ['root.value', 'root.left.value']
    }),
    toBeNullTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: [
        'root.right',
        'root.left.left',
        'root.left.right'
      ]
    }),
  ].flat()

}

const validateAfterInsert76Operations = ({ myTree, returnValue }) => {
  let correct = new CorrectBST()
  correct.insert(47)
  correct.insert(21)
  const correctReturnValue = correct.insert(76)

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
    toBeTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: [
        'root.value',
        'root.left.value',
        'rtRight.value'
      ]
    }),
    toBeNullTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: [
        'root.left.left',
        'root.left.right',
        'root.right.left',
        'root.right.right',
      ]
    }),
  ].flat()

}

const validateAfterInsert18Operations = ({ myTree, returnValue }) => {
  let correct = new CorrectBST()
  correct.insert(47)
  correct.insert(21)
  correct.insert(76)
  const correctReturnValue = correct.insert(18)

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
    toBeTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: [
        'root.value',
        'root.left.value',
        'root.left.left.value',
        'root.right.value'
      ]
    }),
    toBeNullTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
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

const validateAfterInsertDuplicationOperations = ({ myTree, returnValue }) => {
  let correct = new CorrectBST()
  correct.insert(47)
  correct.insert(21)
  correct.insert(76)
  correct.insert(18)
  const correctReturnValue = correct.insert(76)

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
    toEqualTests({
      name: 'returnValue',
      my: returnValue,
      correct: correctReturnValue,
      paths: ['', 'root']
    })
  ].flat()
}

const insertTests = ({ BST }) => {
  describe(`insert`, () => {
    describe(`\n\tlet myTree = new BST()`, () => {
      const myTree = new BST();

      const tests = validateBeforeInsertOperations(myTree)

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tconst returnValue = myTree.insert(47)`, () => {
      let myTree = new CorrectBST()
      const returnValue = myTree.insert(47)

      const tests = validateAfterInsert47Operations({ myTree, returnValue })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tconst returnValue = myTree.insert(21)`, () => {
      let myTree = new BST()
      myTree.insert(47)
      const returnValue = myTree.insert(21)

      const tests = validateAfterInsert21Operations({ myTree, returnValue })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tconst returnValue = myTree.insert(76)`, () => {
      let myTree = new BST()
      myTree.insert(47)
      myTree.insert(21)
      const returnValue = myTree.insert(76)

      const tests = validateAfterInsert76Operations({ myTree, returnValue })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tconst returnValue = myTree.insert(18)`, () => {
      let myTree = new BST()
      myTree.insert(47)
      myTree.insert(21)
      myTree.insert(76)
      const returnValue = myTree.insert(18)

      const tests = validateAfterInsert18Operations({ myTree, returnValue })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tmyTree.insert(18)\n\tconst returnValue = myTree.insert(76)`, () => {
      let myTree = new BST()
      myTree.insert(47)
      myTree.insert(21)
      myTree.insert(76)
      myTree.insert(18)
      const returnValue = myTree.insert(76)

      const tests = validateAfterInsertDuplicationOperations({
        myTree,
        returnValue
      })

      executeTestCases(tests)
    })
  })
}

export default insertTests


