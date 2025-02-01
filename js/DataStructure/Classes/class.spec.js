import { describe, expect, it } from "vitest"
import { Cookie } from "./class"

describe('Cookie Class', () => {
  const tests = [
    ['One', 'green'],
    ['Two', 'blue'],
    ['Three', 'yellow'],
    ['Four', 'red'],
  ]
  tests.forEach(([n, color]) => {
    it(`const cookie${n} = new Cookie(${color}); \n\tcookie${n}.color >> ${color}`, () => {
      const result = new Cookie(color).color
      expect(result).toBe(color)
    })
  })
}) 

