import { describe } from "vitest";
import {
  constructorTests,
  containsTests,
  insertTests,
  rContainsTests,
  rInsertTests,
  deleteNodeTests,
  bfsTests,
  dfsPreOrderTests,
} from ".";
import {
  Node,
  BSTConstructor,
  BSTInsert,
  BSTContains,
  BSTrContains,
  BSTrInsert,
  BSTDeleteNode,
  BSTBFS,
  BSTDFSPreOrder,
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
  {
    describeText: "EXERCISE-BST-DFSPreOrder",
    BST: BSTDFSPreOrder,
    tests: dfsPreOrderTests,
  },
];

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }));
});
