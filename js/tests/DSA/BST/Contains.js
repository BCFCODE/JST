import { describe } from "vitest";
import { BST } from "../../../DSA/BST";
import { CorrectBST } from "../correct/BST";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Contains() {
  random.rangeLimit = 30;

  const val1 = random.greaterThan(random.rangeLimit);
  const val2 = random.lessThan(val1);
  const val3 = random.greaterThan(val1);
  const val4 = random.lessThan(val2);
  const val5 = random.greaterThan(val2);
  const val6 = random.greaterThan(val3);
  const val7 = random.greaterThan(val6);

  const containValues = [val1, val2, val3, val4, val5, val6, val7];

  const myTree = new BST();
  containValues.forEach((value) => myTree.insert(value));
  const correct = new CorrectBST();
  containValues.forEach((value) => correct.insert(value));

  const randomNotContainValue = random.notBetween(val4, val7);

  containValues.forEach((containValue) => {
    describe(`After testing contain value (myTree contains ${containValue})\n\tconst myTree = new BST();${containValues.map((value, i, arr) => `\n\tmyTree.insert(${value})`)}\n\tconst returnValue = myTree.contains(${containValue})`, () => {
      const returnValue = myTree.contains(containValue);
      const correctReturnValue = correct.contains(containValue);

      const tests = new Tests({
        name: "myTree",
        my: myTree,
        correct,
      });
      tests.extra = [
        ["\n\treturnValue", returnValue, "toBe", correctReturnValue],
      ];
      tests.run();
    });
  });

  describe(`After testing not contain value (myTree NOT contains ${randomNotContainValue})\n\tconst myTree = new BST();${containValues.map((value, i, arr) => `\n\tmyTree.insert(${value})`)}\n\tconst returnValue = myTree.contains(${randomNotContainValue})`, () => {
    const returnValue = myTree.contains(randomNotContainValue);
    const correctReturnValue = correct.contains(randomNotContainValue);

    const tests = new Tests({
      name: "myTree",
      my: myTree,
      correct,
    });
    tests.extra = [
      ["\n\treturnValue", returnValue, "toBe", correctReturnValue],
    ];
    tests.run();
  });
}
