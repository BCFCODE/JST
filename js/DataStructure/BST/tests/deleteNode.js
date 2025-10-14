import { describe } from "vitest";
import { executeTestCases, toBeNullTests, toBeTests } from "../../../utils";
import CorrectBST from "./Correct";

const buildTestsForDeletingNonExistentNode = ({ myTree }) => {
  let correct = new CorrectBST();
  correct.rInsert(47);
  correct.rInsert(21);
  correct.deleteNode(18);

  return [
    toBeTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.value", "root.left.value"],
    }),
    toBeNullTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.left.left", "root.left.right", "root.right"],
    }),
  ].flat();
};

const buildTestsForDeletingLeafNodeWithoutChildren = ({ myTree }) => {
  let correct = new CorrectBST();
  correct.rInsert(47);
  correct.rInsert(21);
  correct.deleteNode(21);

  return [
    toBeTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.value"],
    }),
    toBeNullTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.left", "root.right"],
    }),
  ].flat();
};

const buildTestsForDeletingNodeWithOnlyRightChild = ({ myTree }) => {
  let correct = new CorrectBST();
  correct.rInsert(47);
  correct.rInsert(21);
  correct.rInsert(22);
  correct.deleteNode(21);

  return [
    toBeTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.value", "root.left.value"],
    }),
    toBeNullTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.right", "root.left.left", "root.left.right"],
    }),
  ].flat();
};

const buildTestsForDeletingNodeWithOnlyLeftChild = ({ myTree }) => {
  let correct = new CorrectBST();
  correct.rInsert(47);
  correct.rInsert(21);
  correct.rInsert(20);
  correct.deleteNode(21);

  return [
    toBeTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.value", "root.left.value"],
    }),
    toBeNullTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: ["root.right", "root.left.left", "root.left.right"],
    }),
  ].flat();
};

const buildTestsForMinValueHelperFunction = ({
  myTree,
  actualMinValueAtRoot,
  actualMinValueAtRightSubtree,
}) => {
  let correct = new CorrectBST();
  correct.rInsert(47);
  correct.rInsert(21);
  correct.rInsert(76);
  correct.rInsert(18);
  correct.rInsert(27);
  correct.rInsert(52);
  correct.rInsert(82);

  const expectedMinValueAtRoot = correct.minValue(myTree.root);
  const expectedMinValueAtRightSubtree = correct.minValue(myTree.root.right);

  return [
    toBeTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: [
        "root.value",
        "root.left.value",
        "root.right.value",
        "root.left.left.value",
        "root.left.right.value",
        "root.right.left.value",
        "root.right.right.value",
      ],
    }),
    toBeNullTests({
      name: "myTree",
      my: myTree,
      correct,
      paths: [
        "root.left.left.left",
        "root.left.left.right",
        "root.right.right.left",
        "root.left.right.right",
        "root.right.left.left",
        "root.right.left.right",
        "root.right.right.left",
        "root.right.right.right",
      ],
    }),
    [
      [
        "\n\tconst actualMinValueAtRoot = myTree.minValue(myTree.root)\n\tactualMinValueAtRoot",
        actualMinValueAtRoot,
        "toBe",
        expectedMinValueAtRoot,
      ],
      [
        "\n\tconst actualMinValueAtRightSubtree = myTree.minValue(myTree.root.right)\n\tactualMinValueAtRightSubtree",
        actualMinValueAtRightSubtree,
        "toBe",
        expectedMinValueAtRightSubtree,
      ],
    ],
  ].flat();
};

const deleteNodeTests = ({ BST }) => {
  describe(`deleteNode`, () => {
    describe(`\n\tDeleting a non-existent node in the tree >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.deleteNode(18)`, () => {
      let myTree = new BST();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.deleteNode(18);

      const tests = buildTestsForDeletingNonExistentNode({ myTree });

      executeTestCases(tests);
    });

    describe(`\n\tStep 1: Deleting a leaf node (no left or right children) >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.deleteNode(21)`, () => {
      let myTree = new BST();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.deleteNode(21);

      const tests = buildTestsForDeletingLeafNodeWithoutChildren({ myTree });

      executeTestCases(tests);
    });

    describe(`\n\tStep 2: Deleting a node with no left child but a right child >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(22)\n\tmyTree.deleteNode(21)`, () => {
      let myTree = new BST();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.rInsert(22);
      myTree.deleteNode(21);

      const tests = buildTestsForDeletingNodeWithOnlyRightChild({ myTree });

      executeTestCases(tests);
    });

    describe(`\n\tStep 3: Deleting a node with no right child but a left child >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(20)\n\tmyTree.deleteNode(21)`, () => {
      let myTree = new BST();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.rInsert(20);
      myTree.deleteNode(21);

      const tests = buildTestsForDeletingNodeWithOnlyLeftChild({ myTree });

      executeTestCases(tests);
    });

    describe(`\n\tStep 4: Implementing the minValue Helper Function >>\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(18)\n\tmyTree.rInsert(27)\n\tmyTree.rInsert(52)\n\tmyTree.rInsert(82)`, () => {
      let myTree = new BST();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.rInsert(76);
      myTree.rInsert(18);
      myTree.rInsert(27);
      myTree.rInsert(52);
      myTree.rInsert(82);

      const actualMinValueAtRoot = myTree.minValue(myTree.root);
      const actualMinValueAtRightSubtree = myTree.minValue(myTree.root.right);

      const tests = buildTestsForMinValueHelperFunction({
        myTree,
        actualMinValueAtRoot,
        actualMinValueAtRightSubtree,
      });

      executeTestCases(tests);
    });
  });
};

export default deleteNodeTests;
