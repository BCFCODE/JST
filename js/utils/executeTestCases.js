import { it } from "vitest";
import { expect } from "vitest";
import J from "./J";

// Helper function for cleaner test structure
export const executeTestCases = (tests) => {
  tests.forEach(([message, result, assertionMethod, expected]) => {
    it(`${message} >> ${J(expected)}`, () => {
      expect(result)[assertionMethod](expected);
    });
  });
};

export default executeTestCases