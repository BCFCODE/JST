import { it, expect, describe } from "vitest";
import Random from "../../../../utils/Random";
import isLandscape from "../../../../TV/053/control-flow/2-landscape";

const random = new Random();

describe("2-landscape", () => {
  const lessThanValue = random.greaterThan(1);
  const greaterThanValue = random.greaterThan(lessThanValue);

  it.each([
    { width: lessThanValue, height: greaterThanValue, expectedResult: false },
    { width: greaterThanValue, height: lessThanValue, expectedResult: true },
  ])(
    `isLandscape($width, $height) should be $expectedResult`,
    ({ width, height, expectedResult }) => {
      const result = isLandscape(width, height);
      expect(result).toBe(expectedResult);
    },
  );
});
