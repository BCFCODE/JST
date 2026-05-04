import { describe } from "vitest";
import { BST } from "../../../DSA/BST";
import { CorrectBST } from "../correct/BST";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Insert() {
  random.rangeLimit = 30;

  const val1 = random.greaterThan(random.rangeLimit);
  const val2 = random.lessThan(val1);
  const val3 = random.greaterThan(val1);
  const val4 = random.lessThan(val2);

  const duplicatedValues = [val1, val2, val3, val4];

  const myTree = new BST(); 
  const correct = new CorrectBST(); 
 
  describe(`Before inserting any node to tree\n\tconst myTree = new BST();`, () => {
    const tests = new Tests({
      name: "myTree",
      my: myTree,
      correct,
    });
    const paths = {
      toBeNull: ["root"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.extra = [["\n\tmyTree", myTree, "toEqual", correct]];
    tests.run();
  });

  describe(`After inserting ${val1} to an empty tree\n\tconst myTree = new BST();\n\tconst returnValue = myTree.insert(${val1});`, () => {
    const returnValue = myTree.insert(val1);
    const correctReturnValue = correct.insert(val1);

    const tests = new Tests({
      name: "myTree",
      my: myTree,
      correct,
    });
    const paths = {
      toBeNull: ["root.left", "root.right"],
      toBe: ["root.value"],
    };
    tests.checkBSTInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [`\n\treturnValue`, returnValue, "toEqual", correctReturnValue],
    ];
    tests.run();
  });

  describe(`const myTree = new BST();\n\tmyTree.insert(${val1});\n\tmyTree.insert(${val2});`, () => {
    const returnValue = myTree.insert(val2);
    const correctReturnValue = correct.insert(val2);

    const tests = new Tests({
      name: "myTree",
      my: myTree,
      correct,
    });
    const paths = {
      toBeNull: ["root.left.left", "root.left.right", "root.right"],
      toBe: ["root.value", "root.left.value"],
    };
    tests.checkBSTInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [`\n\treturnValue`, returnValue, "toEqual", correctReturnValue],
    ];
    tests.run();
  });

  describe(`const myTree = new BST();\n\tmyTree.insert(${val1});\n\tmyTree.insert(${val2});\n\tconst returnValue = myTree.insert(${val3});`, () => {
    const returnValue = myTree.insert(val3);
    const correctReturnValue = correct.insert(val3);

    const tests = new Tests({
      name: "myTree",
      my: myTree,
      correct,
    });
    const paths = {
      toBeNull: [
        "root.left.left",
        "root.left.right",
        "root.right.left",
        "root.right.right",
      ],
      toBe: ["root.value", "root.left.value", "root.right.value"],
    };
    tests.checkBSTInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [`\n\treturnValue`, returnValue, "toEqual", correctReturnValue],
    ];
    tests.run();
  });

  describe(`const myTree = new BST();\n\tmyTree.insert(${val1});\n\tmyTree.insert(${val2});\n\tmyTree.insert(${val3});\n\tconst returnValue = myTree.insert(${val4});`, () => {
    const returnValue = myTree.insert(val4);
    const correctReturnValue = correct.insert(val4);

    const tests = new Tests({
      name: "myTree",
      my: myTree,
      correct,
    });
    const paths = {
      toBeNull: [
        "root.left.left.left",
        "root.left.left.right",
        "root.left.right",
        "root.right.left",
        "root.right.right",
      ],
      toBe: [
        "root.value",
        "root.left.value",
        "root.left.left.value",
        "root.right.value",
      ],
    };
    tests.checkBSTInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [`\n\treturnValue`, returnValue, "toEqual", correctReturnValue],
    ];
    tests.run();
  });

  duplicatedValues.forEach((duplicatedValue) => {
    describe(`After insert ${duplicatedValue} (duplicated value)\n\tconst myTree = new BST();\n\tmyTree.insert(${val1});\n\tmyTree.insert(${val2});\n\tmyTree.insert(${val3});\n\tmyTree.insert(${val4});\n\tconst returnValue = myTree.insert(${duplicatedValue});`, () => {
      const returnValue = myTree.insert(duplicatedValue);
      const correctReturnValue = correct.insert(duplicatedValue);

      const tests = new Tests({
        name: "myTree",
        my: myTree,
        correct,
      });
      const paths = {
        toBeNull: [
          "root.left.left.left",
          "root.left.left.right",
          "root.left.right",
          "root.right.left",
          "root.right.right",
        ],
        toBe: [
          "root.value",
          "root.left.value",
          "root.left.left.value",
          "root.right.value",
        ],
      };
      tests.checkBSTInternalStructure();
      tests.toBeNull(paths.toBeNull);
      tests.toBe(paths.toBe);
      tests.extra = [
        [`\n\treturnValue`, returnValue, "toEqual", correctReturnValue],
      ];
      tests.run();
    });
  });
}
