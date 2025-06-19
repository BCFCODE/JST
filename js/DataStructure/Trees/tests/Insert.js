import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests, toEqualTests } from "../../../utils"

const buildExpectedBSTBeforeInsert = (BST) => {
  let myTree = new BST()
  return { correct: { myTree } }
}

export const validateBeforeInsertOperations =
  ({ BST, myTree }) => {
    const { correct } = buildExpectedBSTBeforeInsert(BST)

    return [
      toBeNullTests({ name: 'myTree', my: myTree, correct: correct.myTree, paths: ['root'] })
    ].flat()

  }

const buildExpectedBSTAfterInsert47 = (BST) => {
  let myTree = new BST()
  const returnValue = myTree.insert(47)
  return { correct: { myTree, returnValue } }
}

export const validateAfterInsert47Operations =
  ({ BST, myTree, returnValue }) => {
    const { correct } = buildExpectedBSTAfterInsert47(BST)

    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: ['root.value']
      }),
      toBeNullTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: ['root.left', 'root.right']
      }),
      toBeTests({
        name: 'returnValue',
        my: returnValue,
        correct: correct.returnValue,
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

const buildExpectedBSTAfterInsert21 = (BST) => {
  let myTree = new BST()
  myTree.insert(47)
  const returnValue = myTree.insert(21)
  return { correct: { myTree, returnValue } }
}

export const validateAfterInsert21Operations =
  ({ BST, myTree, returnValue }) => {
    const { correct } = buildExpectedBSTAfterInsert21(BST)

    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: ['root.value', 'root.left.value']
      }),
      toBeNullTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: [
          'root.right',
          'root.left.left',
          'root.left.right'
        ]
      }),
      toBeTests({
        name: 'returnValue',
        my: returnValue,
        correct: correct.returnValue,
        paths: ['root.value', 'root.left.value']
      }),
      toBeNullTests({
        name: 'returnValue',
        my: returnValue,
        correct: correct.returnValue,
        paths: [
          'root.right',
          'root.left.left',
          'root.left.right'
        ]
      }),
    ].flat()

  }

const buildExpectedBSTAfterInsert76 = (BST) => {
  let myTree = new BST()
  myTree.insert(47)
  myTree.insert(21)
  const returnValue = myTree.insert(76)
  return { correct: { myTree, returnValue } }
}

export const validateAfterInsert76Operations =
  ({ BST, myTree, returnValue }) => {
    const { correct } = buildExpectedBSTAfterInsert76(BST)
    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: [
          'root.value',
          'root.left.value',
          'root.right.value'
        ]
      }),
      toBeNullTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
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
        correct: correct.returnValue,
        paths: [
          'root.value',
          'root.left.value',
          'root.right.value'
        ]
      }),
      toBeNullTests({
        name: 'returnValue',
        my: returnValue,
        correct: correct.returnValue,
        paths: [
          'root.left.left',
          'root.left.right',
          'root.right.left',
          'root.right.right',
        ]
      }),
    ].flat()

  }

const buildExpectedBSTAfterInsert18 = (BST) => {
  let myTree = new BST()
  myTree.insert(47)
  myTree.insert(21)
  myTree.insert(76)
  const returnValue = myTree.insert(18)
  return { correct: { myTree, returnValue } }
}

export const validateAfterInsert18Operations =
  ({ BST, myTree, returnValue }) => {
    const { correct } = buildExpectedBSTAfterInsert18(BST)
    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
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
        correct: correct.myTree,
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
        correct: correct.returnValue,
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
        correct: correct.returnValue,
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

const buildExpectedBSTAfterInsertDuplication = (BST) => {
  let myTree = new BST()
  myTree.insert(47)
  myTree.insert(21)
  myTree.insert(76)
  myTree.insert(18)
  const returnValue = myTree.insert(76)
  return { correct: { myTree, returnValue } }
}

export const validateAfterInsertDuplicationOperations =
  ({ BST, myTree, returnValue }) => {
    const { correct } = buildExpectedBSTAfterInsertDuplication(BST)
    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
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
        correct: correct.myTree,
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
        correct: correct.returnValue,
        paths: ['', 'root']
      })
    ].flat()
  }

const insertTests = ({ BST }) => {
  describe(`insert`, () => {
    describe(`\n\tlet myTree = new BST()`, () => {
      const { correct } = buildExpectedBSTBeforeInsert(BST)

      const tests = validateBeforeInsertOperations({
        BST,
        myTree: correct.myTree
      })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tconst returnValue = myTree.insert(47)`, () => {
      const { correct } = buildExpectedBSTAfterInsert47(BST)

      const tests = validateAfterInsert47Operations({
        BST,
        myTree: correct.myTree,
        returnValue: correct.returnValue
      })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tconst returnValue = myTree.insert(21)`, () => {
      const { correct } = buildExpectedBSTAfterInsert21(BST)

      const tests = validateAfterInsert21Operations({
        BST,
        myTree: correct.myTree,
        returnValue: correct.returnValue
      })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tconst returnValue = myTree.insert(76)`, () => {
      const { correct } = buildExpectedBSTAfterInsert76(BST)

      const tests = validateAfterInsert76Operations({
        BST,
        myTree: correct.myTree,
        returnValue: correct.returnValue
      })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tconst returnValue = myTree.insert(18)`, () => {
      const { correct } = buildExpectedBSTAfterInsert18(BST)

      const tests = validateAfterInsert18Operations({
        BST,
        myTree: correct.myTree,
        returnValue: correct.returnValue
      })

      executeTestCases(tests)
    })

    describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tmyTree.insert(18)\n\tconst returnValue = myTree.insert(76)`, () => {
      const { correct } = buildExpectedBSTAfterInsertDuplication(BST)

      const tests = validateAfterInsertDuplicationOperations({
        BST,
        myTree: correct.myTree,
        returnValue: correct.returnValue
      })

      executeTestCases(tests)
    })
  })
}

export default insertTests


