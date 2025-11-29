import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { merge, mergeSort } from "./merge";

describe(`Sort`, () => {
  it(`bubbleSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = bubbleSort([4, 2, 6, 5, 1, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`selectionSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = selectionSort([4, 2, 6, 5, 1, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`insertionSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = insertionSort([4, 2, 6, 5, 1, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`merge([1, 3, 7, 8], [2, 4, 5, 6]) >> [1, 2, 3, 4, 5, 6, 7, 8]`, () => {
    const result = merge([1, 3, 7, 8], [2, 4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it(`mergeSort([3, 1, 4, 2]) >> [1, 2, 3, 4]`, () => {
    const result = mergeSort([3, 1, 4, 2]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
