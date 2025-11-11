import { describe } from "vitest";
import { executeTestCases } from "../../../utils";
import DFSPreOrder from "../DFSPreOrder";
import CorrectBST from "./Correct";

const buildTests = (results) => {
  let correct = new CorrectBST();
  correct.rInsert(47);
  correct.rInsert(21);
  correct.rInsert(76);
  correct.rInsert(18);
  correct.rInsert(27);
  correct.rInsert(52);
  correct.rInsert(82);

  const expectedresults = correct.DFSPreOrder();
  
  return [
    [
      `\n\tcorrect results`,
      results,
      "toEqual",
      expectedresults,
    ],
  ];
};

const dfsPreOrderTests = () => {
  describe(`DFSPreOrder`, () => {
    describe(`\n\tlet myTree = new DFSPreOrder()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(18)\n\tmyTree.rInsert(27)\n\tmyTree.rInsert(52)\n\tmyTree.rInsert(82)\n\tconst expectedresults = myTree.DFSPreOrder()`, () => {
      let myTree = new DFSPreOrder();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.rInsert(76);
      myTree.rInsert(18);
      myTree.rInsert(27);
      myTree.rInsert(52);
      myTree.rInsert(82);

      const results = myTree.DFSPreOrder();

      const tests = buildTests(results);

      executeTestCases(tests);
    });
  });
};

export default dfsPreOrderTests;
