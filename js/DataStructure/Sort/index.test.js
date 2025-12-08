import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { merge, mergeSort } from "./merge";
import { pivot, swap } from "./quickSort";

const randomIndex = (arr) =>
  Array.from({ length: 2 }).map(() => Math.floor(Math.random() * arr.length));

const randomArray = (length = 9) => [
  ...new Set(Array.from({ length }, () => Math.floor(Math.random() * 9))),
];

describe(`Basic Sorts`, () => {
  describe("", () => {
    const array = randomArray();
    function bubbleSort(array) {
      for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;
    }
    const expectedResult = bubbleSort(array);
    it(`bubbleSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = bubbleSort(array);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("", () => {
    const array = randomArray();
    function selectionSort(array) {
      for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[min]) {
            min = j;
          }
        }
        if (i !== min) {
          let temp = array[i];
          array[i] = array[min];
          array[min] = temp;
        }
      }
      return array;
    }
    const expectedResult = selectionSort(array);
    it(`selectionSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = selectionSort(array);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("", () => {
    const array = randomArray();
    function insertionSort(array) {
      let temp;
      for (let i = 1; i < array.length; i++) {
        temp = array[i];
        for (var j = i - 1; array[j] > temp && j > -1; j--) {
          array[j + 1] = array[j];
        }
        array[j + 1] = temp;
      }
      return array;
    }
    const expectedResult = insertionSort(array);
    it(`insertionSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = insertionSort(array);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Merge Sort", () => {
  function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        combined.push(array1[i]);
        i++;
      } else {
        combined.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      combined.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      combined.push(array2[j]);
      j++;
    }
    return combined;
  }

  function mergeSort(array) {
    if (array.length === 1) return array;

    let midIndex = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, midIndex));
    let right = mergeSort(array.slice(midIndex));

    return merge(left, right);
  }

  describe("", () => {
    const [array1, array2] = Array.from({ length: 2 }).map((arr) =>
      randomArray(arr)
    );
    const expectedResult = merge(array1, array2);
    it(`merge([${array1.join`, `}], [${array2.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = merge(array1, array2);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("", () => {
    const array = randomArray();
    const expectedResult = mergeSort(array);
    it(`mergeSort([${array.join`, `}]) >> [${expectedResult.join`, `}]`, () => {
      const result = mergeSort(array);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Quick Sort", () => {
  const buildTest = (arr) => [[...arr], ...randomIndex(arr)];

  describe("", () => {
    const tests = Array.from({ length: 1 }).map(() => buildTest(randomArray()));

    function correctSwap(array, firstIndex, secondIndex) {
      let temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
    }

    tests.forEach(([array, firstIndex, secondIndex]) => {
      const expectedResult = [...array];
      correctSwap(expectedResult, firstIndex, secondIndex);
      it(`swap([${array.join`, `}], ${firstIndex}, ${secondIndex}) >> [${expectedResult.join`, `}]`, () => {
        swap(array, firstIndex, secondIndex);
        expect(array).toEqual(expectedResult);
      });
    });
  });

  describe("", () => {
    const tests = Array.from({ length: 1 }).map(() => buildTest(randomArray()));

    function correctPivot(array, pivotIndex = 0, endIndex = array.length - 1) {
      let swapIndex = pivotIndex;
      for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
          swapIndex++;
          swap(array, swapIndex, i);
        }
      }
      swap(array, pivotIndex, swapIndex);
      return swapIndex;
    }

    tests.forEach(([array, pivotIndex, endIndex]) => {
      const expectedResult = [...array];
      correctPivot(expectedResult, pivotIndex, endIndex);
      it(`pivot([${array.join`, `}], ${pivotIndex}, ${endIndex}) >> [${expectedResult.join`, `}]`, () => {
        pivot(array, pivotIndex, endIndex);
        expect(array).toEqual(expectedResult);
      });
    });
  });
});
