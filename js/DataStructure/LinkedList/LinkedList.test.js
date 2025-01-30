import { obj1 } from "./LinkedList";
import { describe, it, expect } from "vitest";


describe(`Pointer description`, () => {
  const tests = [
    [1, 23],
    [2, 109],
    [3, 23],
  ]
  tests.forEach(([objNumber, value]) => {
    it(`\n\tlet obj${objNumber} = { value: ${value} }; obj${objNumber}.value = 10; \n\t>> obj1.value should be 10`, () => {
      const result = obj1.value
      expect(result).toBe(10)
    })
  })
})
