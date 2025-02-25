import { expect, it } from "vitest";

export const J = (value) => JSON.stringify(value)

// Helper function for cleaner test structure
export const runTests = (tests) => {
  tests.forEach(([message, result, assertionMethod, expected]) => {
    it(`${message} >> ${J(expected)}`, () => {
      expect(result)[assertionMethod](expected);
    });
  });
};