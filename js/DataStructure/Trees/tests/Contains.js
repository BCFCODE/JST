import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests, toEqualTests } from "../../../utils"

const buildExpectedBSTBeforeContains = (BST) => {
  let myTree = new BST()
  myTree.insert(47)
  myTree.insert(21)
  myTree.insert(76)
  myTree.insert(18)
  myTree.insert(27)
  myTree.insert(52)
  myTree.insert(82)
  return { correct: { myTree } }
}

export const validateBeforeContainsOperations =
  ({ BST, myTree }) => {
    const { correct } = buildExpectedBSTBeforeContains(BST)

    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: [
          'root.value',
          'root.left.value',
          'root.left.left.value',
          'root.left.right.value',
          'root.right.value',
          'root.right.left.value',
          'root.right.right.value'
        ]
      }),
      toBeNullTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: [
          'root.left.left.left',
          'root.left.left.right',
          'root.left.right.left',
          'root.left.right.right',
          'root.right.left.left',
          'root.right.left.right',
          'root.right.right.left',
          'root.right.right.right'
        ]
      }),
    ].flat()

  }

const buildExpectedBSTContains = ({ BST, value }) => {
  let myTree = new BST()
  myTree.insert(47)
  myTree.insert(21)
  myTree.insert(76)
  myTree.insert(18)
  myTree.insert(27)
  myTree.insert(52)
  myTree.insert(82)
  const returnValue = myTree.contains(value)
  return { correct: { myTree, returnValue } }
}

export const validateContainsOperations =
  ({ BST, myTree, value, returnValue }) => {
    const { correct } = buildExpectedBSTContains({ BST, value })

    return [
      toBeTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: [
          'root.value',
          'root.left.value',
          'root.left.left.value',
          'root.left.right.value',
          'root.right.value',
          'root.right.left.value',
          'root.right.right.value'
        ]
      }),
      toBeNullTests({
        name: 'myTree',
        my: myTree,
        correct: correct.myTree,
        paths: [
          'root.left.left.left',
          'root.left.left.right',
          'root.left.right.left',
          'root.left.right.right',
          'root.right.left.left',
          'root.right.left.right',
          'root.right.right.left',
          'root.right.right.right'
        ]
      }),
      [[`\n\treturnValue`, returnValue, 'toBe', correct.returnValue]]
    ].flat()

  }

const trueValues = [47, 21, 76, 18, 27, 52, 82];

const randomFalseValues =
  [...new Set(
    Array.from({ length: 50 }, (_, k) =>
      Math.ceil(Math.random() * (k + 2)) * Math.floor(Math.random() + 3)
    )
  )].filter(value => !trueValues.includes(value));

const containsTests = ({ BST }) => {
  describe(`contains`, () => {

    describe(`before contains\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tmyTree.insert(18)\n\tmyTree.insert(27)\n\tmyTree.insert(52)\n\tmyTree.insert(82)`, () => {
      const { correct } = buildExpectedBSTBeforeContains(BST)

      const tests = validateBeforeContainsOperations({
        BST,
        myTree: correct.myTree
      })

      executeTestCases(tests)
    });

    [...trueValues, ...randomFalseValues].forEach(value => {
      describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tmyTree.insert(18)\n\tmyTree.insert(27)\n\tmyTree.insert(52)\n\tmyTree.insert(82)\n\tconst returnValue = myTree.contains(${value})`, () => {
        const { correct } = buildExpectedBSTContains({ BST, value })

        const tests = validateContainsOperations({
          BST,
          myTree: correct.myTree,
          value,
          returnValue: correct.returnValue,
        })

        executeTestCases(tests)
      })
    })


  })
}

export default containsTests


