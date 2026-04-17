import { describe } from "vitest";
import LL from "./LL";

const DataStructures = { LL };

describe("DSA (Data Structures & Algorithms)", () => {
  for (const DataStructure in DataStructures) {
    describe(DataStructure, () => {
      const TESTS = DataStructures[DataStructure];
      TESTS.forEach((TEST) => describe(TEST.name, TEST));
    });
  }
});
