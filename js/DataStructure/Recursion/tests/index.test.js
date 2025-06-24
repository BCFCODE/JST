import { describe } from "vitest";
import recursionTests from ".";
import { factorial as factorialFn } from "../Lessons";
import { factorialFnExercise } from "../Exercises";

const tests = [
  {
    description: 'EXERCISE-Recursion-factorial(n) (Lessons)',
    fn: factorialFn
  },
  {
    description: 'EXERCISE-Recursion-factorial(n)',
    fn: factorialFnExercise
  },
]

tests.forEach(({ description, fn }) => {
  describe(description, () => recursionTests(fn))
})




