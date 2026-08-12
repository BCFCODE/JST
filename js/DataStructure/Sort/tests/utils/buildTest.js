import { randomIndex } from "./randomIndex";

export const buildTest = (arr) => [[...arr], ...randomIndex(arr)];

export const getTests = (callback, nOfTests) =>
  Array.from({ length: nOfTests }).map(callback);
