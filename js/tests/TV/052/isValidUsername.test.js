import { it, expect, describe } from "vitest";
import { isValidUsername } from "../../../TV/052/src/core";

describe("Exercise: Boundary testing", () => {
  const randomBetween0and15 = Math.floor(Math.random() * 15);
  const randomLessThan5 = Math.floor(Math.random() * 5); 
  const randomLessGreaterThan16 = randomBetween0and15 + 16;
  const randomBetween5and15 = randomBetween0and15 < 5 ? 5 : randomBetween0and15;

  it(`\n\tisValidUsername("${"*".repeat(randomLessThan5)}") should not have less than 5 characters long`, () => {
    const result = isValidUsername("*".repeat(randomLessThan5));
    expect(result).toBe(false);
  });

  it(`\n\tisValidUsername("${"*".repeat(randomLessGreaterThan16)}") should not have greater than 15 characters long`, () => {
    const result = isValidUsername("*".repeat(randomLessGreaterThan16));
    expect(result).toBe(false);
  });

  it(`\n\tisValidUsername("${"*".repeat(randomBetween5and15)}") should not have the length between 5 and 15`, () => {
    const result = isValidUsername("*".repeat(randomBetween5and15));
    expect(result).toBe(true);
  });
});
