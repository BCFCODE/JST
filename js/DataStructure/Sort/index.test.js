import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";

describe(`Sort`, () => {
  it(`\n\tbubbleSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = bubbleSort([4, 2, 6, 5, 1, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`\n\tselectionSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = selectionSort([4, 2, 6, 5, 1, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`\n\tinsertionSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = insertionSort([4, 2, 6, 5, 1, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
