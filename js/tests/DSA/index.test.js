import { describe } from "vitest";
import LL from "./LL";
import DLL from "./DLL";
import Stack from "./Stack";
import Queue from "./Queue";
import BST from "./BST";

const DataStructures = { LL, DLL, Stack, Queue, BST };

describe("DSA (Data Structures & Algorithms)", () => {
  for (const DataStructure in DataStructures) {
    describe(`\n\t${DataStructure}`, () => {
      const TESTS = DataStructures[DataStructure]; 
      TESTS.forEach((TEST) => describe(`\n\t${TEST.name}`, TEST));
    });
  }
});
