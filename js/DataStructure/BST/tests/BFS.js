import { describe } from "vitest";
import { executeTestCases } from "../../../utils";
import BST from "../BFS";
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

  const expectedresults = correct.BFS();
  
  return [
    [
      `\n\tcorrect results`,
      results,
      "toEqual",
      expectedresults,
    ],
  ];
};

const bfsTests = () => {
  describe(`BFS`, () => {
    describe(`\n\tlet myTree = new BST()\n\tmyTree.rInsert(47)\n\tmyTree.rInsert(21)\n\tmyTree.rInsert(76)\n\tmyTree.rInsert(18)\n\tmyTree.rInsert(27)\n\tmyTree.rInsert(52)\n\tmyTree.rInsert(82)\n\tconst expectedresults = myTree.BFS()`, () => {
      let myTree = new BST();
      myTree.rInsert(47);
      myTree.rInsert(21);
      myTree.rInsert(76);
      myTree.rInsert(18);
      myTree.rInsert(27);
      myTree.rInsert(52);
      myTree.rInsert(82);

      const results = myTree.BFS();

      const tests = buildTests(results);

      executeTestCases(tests);
    });
  });
};

export default bfsTests;
