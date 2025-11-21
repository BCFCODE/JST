import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";

const test = [4, 2, 6, 5, 1, 3];
const expectedResult = [1, 2, 3, 4, 5, 6];

describe(`Sort`, () => {
  it(`\n\tbubbleSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = bubbleSort(test);
    expect(result).toEqual(expectedResult);
  });

  it(`\n\tselectionSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = selectionSort(test);
    expect(result).toEqual(expectedResult);
  });

  it(`\n\tinsertionSort([4, 2, 6, 5, 1, 3]) >> [1, 2, 3, 4, 5, 6]`, () => {
    const result = insertionSort(test);
    expect(result).toEqual(expectedResult);
  });
});
