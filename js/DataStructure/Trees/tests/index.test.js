import { describe } from "vitest"
import { constructorTests, insertTests } from '.'
import { BSTConstructor, Node, BSTInsert } from "../Exercises"

const tests = [
  {
    describeText: 'EXERCISE-BST-Constructor',
    BST: BSTConstructor,
    tests: constructorTests
  },
  {
    describeText: 'EXERCISE-BST-Insert',
    BST: BSTInsert,
    tests: insertTests
  },
]

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }))
}) 