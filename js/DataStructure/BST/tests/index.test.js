import { describe } from "vitest";
import {
  bfsTests,
  constructorTests,
  deleteNodeTests,
  dfsInOrderTests,
  dfsPostOrderTests,
  dfsPreOrderTests,
  rContainsTests,
  rInsertTests
} from ".";
import {
  BSTBFS,
  BSTConstructor,
  BSTDeleteNode,
  BSTDFSInOrder,
  BSTDFSPostOrder,
  BSTDFSPreOrder,
  BSTrContains,
  BSTrInsert,
  Node
} from "..";

const tests = [
  {
    describeText: "EXERCISE-BST-Constructor",
    BST: BSTConstructor,
    tests: constructorTests,
  },  
  // {
  //   describeText: "EXERCISE-BST-rContains",
  //   BST: BSTrContains,
  //   tests: rContainsTests,
  // },
  // {
  //   describeText: "EXERCISE-BST-rInsert",
  //   BST: BSTrInsert,
  //   tests: rInsertTests,
  // },
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
  {
    describeText: "EXERCISE-BST-DFSPostOrder",
    BST: BSTDFSPostOrder,
    tests: dfsPostOrderTests,
  },
  {
    describeText: "EXERCISE-BST-DFSInOrder",
    BST: BSTDFSInOrder,
    tests: dfsInOrderTests,
  },
];

tests.forEach(({ describeText, tests, BST }) => {
  describe(describeText, () => tests({ BST, Node }));
});
 