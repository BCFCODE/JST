import { describe } from "vitest"
import {
  constructorTests,
  containsTests,
  insertTests,
  rContainsTests
} from '.'
import {
  Node,
  BSTConstructor,
  BSTInsert,
  BSTContains,
  BSTrContains
} from "../Exercises"

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
  {
    describeText: 'EXERCISE-BST-rContains',
    BST: BSTrContains,
    tests: rContainsTests
  },
]

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }))
})  