import { describe } from "vitest";
import {
  constructorTests,
  containsTests,
  insertTests,
  rContainsTests,
  rInsertTests,
  deleteNodeTests,
  bfsTests
} from ".";
import {
  Node,
  BSTConstructor,
  BSTInsert,
  BSTContains,
  BSTrContains,
  BSTrInsert,
  BSTDeleteNode,
  BSTBFS
} from "..";


const tests = [
  {
    describeText: "EXERCISE-BST-Constructor",
    BST: BSTConstructor,
    tests: constructorTests,
  },
  {
    describeText: "EXERCISE-BST-Insert",
    BST: BSTInsert,
    tests: insertTests,
  },
  {
    describeText: "EXERCISE-BST-Contains",
    BST: BSTContains,
    tests: containsTests,
  },
  {
    describeText: "EXERCISE-BST-rContains",
    BST: BSTrContains,
    tests: rContainsTests,
  },
  {
    describeText: "EXERCISE-BST-rInsert",
    BST: BSTrInsert,
    tests: rInsertTests,
  },
  {
    describeText: "EXERCISE-BST-deleteNode",
    BST: BSTDeleteNode,
    tests: deleteNodeTests,
  },
  {
    describeText: "EXERCISE-BST-BFS",
    BST: BSTBFS,
    tests: bfsTests,
  },
];

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }));
});
