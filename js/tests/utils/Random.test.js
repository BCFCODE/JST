import { it, describe, expect } from "vitest";
import Random from "../../utils/Random";

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

  describe(`between() method`, () => {
    const random = new Random();

    const n1 = 0;
    const n2 = random.greaterThan(n1);

    const validNumbers = Array.from({ length: n2 + 1 }, (_, k) => k);

    it(`\n\trandom.between(${n1}, ${n2}); >> should return random number between ${n1} and ${n2}`, () => {
      const result = random.between(n1, n2);
      expect(result).toBeDefined();
      expect(result).toBeTypeOf("number");
      expect(validNumbers).contain(result);
    });

    // TODO : Implement validation tests
  });
});  
