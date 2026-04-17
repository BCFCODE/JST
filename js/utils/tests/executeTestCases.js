import { it } from "vitest";
import { expect } from "vitest";
import J from "../J";

// Helper function for cleaner test structure
export const executeTestCases = (tests) => {
  tests.forEach(([message, result, assertionMethod, expected]) => {
    it(`${message} >> ${JSON.stringify(expected)}`, () => {
      expect(result)[assertionMethod](expected);
    });
  });
};

export default executeTestCases