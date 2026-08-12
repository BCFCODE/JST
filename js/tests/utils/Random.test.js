import { it, describe, expect } from "vitest";
import Random from "../../utils/Random";

const runValidationTests = (random, n1, n2) => {
  const invalidN1 = random.greaterThan(n2);
  const invalidN2 = random.lessThan(n1);

  it(`\n\trandom.between(${invalidN1}, ${n2}); >> should throw new Error("n2: ${n2}, must be greater than n1: ${invalidN1}")`, () => {
    const result = () => random.between(invalidN1, n2);
    expect(result).toThrowError(
      `n1: ${invalidN1}, must be less than n2: ${n2}`,
    );
  });

  it(`\n\trandom.between(${n1}, ${invalidN2}); >> should throw new Error("n1: ${n1}, must be less than n2: ${invalidN2}")`, () => {
    const result = () => random.between(n1, invalidN2);
    expect(result).toThrowError(
      `n1: ${n1}, must be less than n2: ${invalidN2}`,
    );
  });

  it(`\n\trandom.between(${invalidN1}, ${invalidN1}); >> should throw new Error("n2: ${invalidN1}, must be greater than n1: ${invalidN1}")`, () => {
    const result = () => random.between(invalidN1, invalidN1);
    expect(result).toThrowError(
      `n1: ${invalidN1}, must be less than n2: ${invalidN1}`,
    );
  });
};

describe(`Random Class`, () => {
  describe(`lessThan() method`, () => {
    const random = new Random();

    const n = Math.floor(Math.random() * random.rangeLimit);

    it(`\n\trandom.lessThan(${n}); >> should return random number less than ${n}, and between ${n} and ${n - random.rangeLimit}`, () => {
      const result = random.lessThan(n);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(result).toBeLessThan(n);
      expect(result).not.toBeLessThan(n - random.rangeLimit);
    });

    random.rangeLimit = 20;
    it(`\n\trandom.rangeLimit = ${random.rangeLimit};\n\trandom.lessThan(${n}); >> should return random number less than ${n}, and between ${n} and ${n - random.rangeLimit}`, () => {
      const result = random.lessThan(n);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(result).toBeLessThan(n);
      expect(result).not.toBeLessThan(n - random.rangeLimit);
    });
  });

  describe(`greaterThan() method`, () => {
    const random = new Random();

    const n = Math.floor(Math.random() * random.rangeLimit);

    it(`\n\trandom.greaterThan(${n}); >> should return random number less than ${n}, and between ${n} and ${n + random.rangeLimit}`, () => {
      const result = random.greaterThan(n);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(result).toBeGreaterThan(n);
      expect(result).not.toBeGreaterThan(n + random.rangeLimit);
    });

    random.rangeLimit = 20;
    it(`\n\trandom.rangeLimit = ${random.rangeLimit};\n\trandom.greaterThan(${n}); >> should return random number less than ${n}, and between ${n} and ${n + random.rangeLimit}`, () => {
      const result = random.greaterThan(n);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(result).toBeGreaterThan(n);
      expect(result).not.toBeGreaterThan(n + random.rangeLimit);
    });
  });

  const random = new Random();

  const validN1 = 0;
  const validN2 = random.greaterThan(validN1);

  const validNumbers = Array.from({ length: validN2 + 1 }, (_, k) => k);

  describe(`between() method`, () => {
    it(`\n\trandom.between(${validN1}, ${validN2}); >> should return random number between ${validN1} and ${validN2}`, () => {
      const result = random.between(validN1, validN2);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(validNumbers).contain(result);
    });

    runValidationTests(random, validN1, validN2);
  });

  describe(`notBetween() method`, () => {
    it(`\n\trandom.notBetween(${validN1}, ${validN2}); >> should return random number notBetween ${validN1} and ${validN2}`, () => {
      const result = random.notBetween(validN1, validN2);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(validNumbers).not.contain(result);
    });

    runValidationTests(random, validN1, validN2);
  });

  describe(`rangeLimit`, () => {
    const result = random.rangeLimit;

    describe(`check default value`, () => {
      it(`\n\trandom.rangeLimit should be defined and to be type of number (default value: ${random.rangeLimit})`, () => {
        expect(result).toBeDefined();
        expect(result).toBeTypeOf("number");
      });
    });

    describe(`change default value`, () => {
      const randomNumberGreaterThanZero = random.greaterThan(0);
      const randomNumberLessThanZero = random.lessThan(0);
      it(`\n\trandom.rangeLimit = ${randomNumberGreaterThanZero} should change value of rangeLimit to value of ${randomNumberGreaterThanZero}`, () => {
        random.rangeLimit = randomNumberGreaterThanZero;
        const result = random.rangeLimit;
        expect(result).toBe(randomNumberGreaterThanZero);
        expect(result).toBeDefined();
        expect(result).toBeTypeOf("number");
      });
    });
  });
});
