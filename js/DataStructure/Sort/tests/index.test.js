import { describe, expect, it } from "vitest";
import { bubbleSort } from "../bubbleSort";
import { insertionSort } from "../insertionSort";
import { pivot, quickSort, swap } from "../quickSort";
import { selectionSort } from "../selectionSort";
import { merge, mergeSort } from "../merge";
import Correct from "./Correct";
import { buildTest, getTests, randomArray } from "./utils";

const correct = new Correct();

describe(`Basic Sorts`, () => {
  describe("", () => {
    const array = randomArray();

    const expectedResult = correct.bubbleSort(array);
    it(`bubbleSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = bubbleSort(array);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("", () => {
    const array = randomArray();

    const expectedResult = correct.selectionSort(array);
    it(`selectionSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = selectionSort(array);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("", () => {
    const array = randomArray();

    const expectedResult = correct.insertionSort(array);
    it(`insertionSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = insertionSort(array);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Merge Sort", () => {
  describe("", () => {
    const [array1, array2] = Array.from({ length: 2 }).map((arr) =>
      randomArray(arr)
    );
    const expectedResult = correct.merge(array1, array2);
    it(`merge([${array1.join`, `}], [${array2.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = merge(array1, array2);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("", () => {
    const array = randomArray();
    const expectedResult = correct.mergeSort(array);
    it(`mergeSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = mergeSort(array);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Quick Sort", () => {
  describe("", () => {
    const tests = getTests(() => buildTest(randomArray()), 1);

    tests.forEach(([array, firstIndex, secondIndex]) => {
      const expectedResult = [...array];
      correct.swap(expectedResult, firstIndex, secondIndex);
      it(`swap([${array.join`, `}], ${firstIndex}, ${secondIndex}) >> [${expectedResult.join`, `}]`, () => {
        swap(array, firstIndex, secondIndex);
        expect(array).toEqual(expectedResult);
      });
    });
  });

  describe("", () => {
    const tests = getTests(() => buildTest(randomArray()), 1);

    tests.forEach(([array, pivotIndex, endIndex]) => {
      const expectedResult = [...array];
      const correctReturnValue = correct.pivot(
        expectedResult,
        pivotIndex,
        endIndex
      );
      let returnValue;
      it(`\n\tconst returnValue = pivot([${array.join`, `}], ${pivotIndex}, ${endIndex})\n\tarray = [${expectedResult.join`, `}]\n\treturnValue >> ${correctReturnValue}`, () => {
        returnValue = pivot(array, pivotIndex, endIndex);
        expect(array).toEqual(expectedResult);
        expect(returnValue).toEqual(correctReturnValue);
      });
    });
  });

  describe("", () => {
    const tests = getTests(() => randomArray(), 1);

    tests.forEach((array) => {
      const expectedResult = [...array];
      const correctQuickSortReturnValue = correct.quickSort(expectedResult);
      let quickSortReturnValue;
      it(`\n\tconst returnValue = quickSort([${array.join`, `}])\n\tarray = [${expectedResult.join`, `}]\n\treturnValue >> [${correctQuickSortReturnValue.join`, `}]`, () => {
        quickSortReturnValue = quickSort(array);
        expect(array).toEqual(expectedResult);
        expect(quickSortReturnValue).toEqual(correctQuickSortReturnValue);
      });
    });
  });
});
