import { it, expect, describe } from 'vitest'
import { getCoupons } from "../../TV-052/src/core";

describe(`getCoupons()`, () => {
  const result = getCoupons();
  it("should return an array", () => {
    expect(Array.isArray(result)).toBe(true);
  });
  it(`should return an array that is not empty`, () => {
    expect(result.length).toBeGreaterThan(0);
  });
  it(`should all of its content have "object" type`, () => {
    expect(result.every((el) => typeof el === "object")).toBe(true);
  });
  it(`should have "discount" and "code" property in each object`, () => {
    result.every((obj) => {
      expect(obj).haveOwnProperty("code");
      expect(obj).haveOwnProperty("discount");
    });
  });
  it(`should all its objects have discount value between 0 and 1`, () => {
    result.every((obj) => {
      expect(obj.discount).greaterThanOrEqual(0);
      expect(obj.discount).toBeLessThanOrEqual(1);
    });
  });
});
