import { it, describe, expect } from "vitest";
import {
  generateRandomIndexGreaterThan,
  generateRandomIndexLessThan,
  generateRandomIndexNotBetween,
  generateRandomIndexBetween,
} from "../../utils/generateRandomIndexes";

describe(`Generate Random Indexes`, () => {
  const range = 50;
  const index1 = 0;
  const index2 = generateRandomIndexGreaterThan(index1, range);
  const validIndexes = Array.from({ length: index2 + 1 }, (_, k) => k);

  it(`generateRandomIndexBetween(${index1}, ${index2})\n\t>> should return random index between ${index1} and ${index2} randomly`, () => {
    const result = generateRandomIndexBetween(index1, index2);
    expect(validIndexes).contain(result);
    expect(result).toBeDefined();
    expect(result).toBeTypeOf("number");
  });
  it(`generateRandomIndexLessThan(${index1}, ${range})\n\t>> should return random index less than ${index1} in range of ${range}`, () => {
    const result = generateRandomIndexLessThan(index1, range);
    expect(result).toBeDefined();
    expect(result).toBeTypeOf("number");
    expect(result).toBeLessThan(index1);
    expect(result).not.toBeLessThan(index1 - range);
  });
  it(`generateRandomIndexGreaterThan(${index2}, ${range})\n\t>> should return random index greater than ${index2} in range of ${range}`, () => {
    const result = generateRandomIndexGreaterThan(index2, range);
    expect(result).toBeDefined();
    expect(result).toBeTypeOf("number");
    expect(result).toBeGreaterThan(index2);
    expect(result).not.toBeGreaterThan(index2 + range);
  });
  it(`generateRandomIndexNotBetween(${index1}, ${index2}, ${range})\n\t>> should return random index less NOT between 0 and ${index2} in range of ${range}`, () => {
    const result = generateRandomIndexNotBetween(index1, index2, range);
    expect(validIndexes).not.contain(result);
    expect(result).toBeDefined();
    expect(result).toBeTypeOf("number");
    expect(result).not.toBeLessThan(index1 - range);
    expect(result).not.toBeGreaterThan(index2 + range);
  });
});
