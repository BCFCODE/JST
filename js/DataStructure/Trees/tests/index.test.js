import { describe } from "vitest"
import { constructorTests, containsTests, insertTests } from '.'
import { BSTConstructor, Node, BSTInsert, BSTContains } from "../Exercises"

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
  {
    describeText: 'EXERCISE-BST-Contains',
    BST: BSTContains,
    tests: containsTests
  },
]

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }))
})  