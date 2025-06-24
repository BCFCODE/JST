import { describe } from "vitest"
import { executeTestCases, toBeNullTests, toBeTests } from "../../../utils"
import CorrectBST from "./Correct"

const validateBeforeRContainsOperations = (myTree) => {
  let correct = new CorrectBST()
  correct.insert(47)
  correct.insert(21)
  correct.insert(76)
  correct.insert(18)
  correct.insert(27)
  correct.insert(52)
  correct.insert(82)

  return [
    toBeTests({
      name: 'myTree',
      my: myTree,
      correct,
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
      correct,
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

const validateRContainsOperations = ({ value, returnValue }) => {
  let correct = new CorrectBST()
  correct.insert(47)
  correct.insert(21)
  correct.insert(76)
  correct.insert(18)
  correct.insert(27)
  correct.insert(52)
  correct.insert(82)
  const correctReturnValue = correct.rContains(value)

  return [
    [[`\n\treturnValue`, returnValue, 'toBe', correctReturnValue]]
  ].flat()

}

const rContainsTests = ({ BST }) => {
  describe(`rContains`, () => {

    describe(`before rContains\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tmyTree.insert(18)\n\tmyTree.insert(27)\n\tmyTree.insert(52)\n\tmyTree.insert(82)`, () => {
      let myTree = new BST()
      myTree.insert(47)
      myTree.insert(21)
      myTree.insert(76)
      myTree.insert(18)
      myTree.insert(27)
      myTree.insert(52)
      myTree.insert(82)

      const tests = validateBeforeRContainsOperations(myTree)

      executeTestCases(tests)
    });

    const trueValues = [47, 21, 76, 18, 27, 52, 82];

    const randomFalseValues =
      [...new Set(
        Array.from({ length: 50 }, (_, k) =>
          Math.ceil(Math.random() * (k + 2)) * Math.floor(Math.random() + 3)
        )
      )].filter(value => !trueValues.includes(value));

    [...trueValues, ...randomFalseValues].forEach(value => {
      describe(`\n\tlet myTree = new BST()\n\tmyTree.insert(47)\n\tmyTree.insert(21)\n\tmyTree.insert(76)\n\tmyTree.insert(18)\n\tmyTree.insert(27)\n\tmyTree.insert(52)\n\tmyTree.insert(82)\n\tconst returnValue = myTree.rContains(${value})`, () => {
        let myTree = new BST()
        myTree.insert(47)
        myTree.insert(21)
        myTree.insert(76)
        myTree.insert(18)
        myTree.insert(27)
        myTree.insert(52)
        myTree.insert(82)
        const returnValue = myTree.rContains(value)

        const tests = validateRContainsOperations({ value, returnValue })

        executeTestCases(tests)
      })
    })


  })
}

export default rContainsTests


