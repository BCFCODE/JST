import { describe } from "vitest"
import { constructorTests } from '.'
import { BSTConstructor, Node } from "../Exercises"

const tests = [
  {
    describeText: 'EXERCISE-BST-Constructor',
    BST: BSTConstructor,
    tests: constructorTests
  },
]

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }))
}) 