import { it, expect, describe } from "vitest";
import Random from "../../../../utils/Random";
import max from "../../../../TV/053/control-flow/1-max";

const random = new Random();

describe("max", () => {
  const a = random.greaterThan(1);
  const b = random.greaterThan(a);
  it.each([
    { a: a, b: b, expectedResult: b },
    { a: b, b: a, expectedResult: b },
  ])(
    `max($a, $b) should return $expectedResult`,
    ({ a, b, expectedResult }) => {
      const result = max(a, b);
      expect(result).toBe(expectedResult);
    },
  );
});
