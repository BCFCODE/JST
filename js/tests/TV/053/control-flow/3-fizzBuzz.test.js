import { it, expect, describe } from "vitest";
import Random from "../../../../utils/Random";
import fizzBuzz from "../../../../TV/053/control-flow/3-fizzBuzz";

const random = new Random();
random.rangeLimit = 1000;

describe("3-fizzBuzz", () => {
  const validInputs = Array.from({ length: 10 }, (_, k) =>
    random.greaterThan(k + 1),
  );

  const invalidInputs = [
    BigInt(random.greaterThan(1)),
    true,
    false,
    () => {},
    {},
    Symbol(),
    undefined,
    null,
    NaN,
  ];

  function getExpectedResult(input) {
    if (typeof input !== "number") return NaN;

    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

    if (input % 3 === 0) return "Fizz";

    if (input % 5 === 0) return "Buzz";

    return input;
  }

  const invalidTests = invalidInputs.map((invalidInput) => ({
    input: invalidInput,
  }));

  it.each(invalidInputs.map((input) => ({ input })))(
    `fizzBuzz($input) should return NaN for invalid inputs`,
    ({ input }) => {
      const result = fizzBuzz(input);
      expect(result).toBe(NaN);
    },
  );

  it.each(
    validInputs.map((input) => ({
      input,
      expectedResult: getExpectedResult(input),
    })),
  )(
    `fizzBuzz($input) should return $expectedResult`,
    ({ input, expectedResult }) => {
      const result = fizzBuzz(input);
      expect(result).toBe(expectedResult);
    },
  );
});
