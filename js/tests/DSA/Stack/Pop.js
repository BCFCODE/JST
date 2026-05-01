import { describe } from "vitest";
import { Stack } from "../../../DSA/Stack";
import { CorrectStack } from "../correct/Stack";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Pop() {
  const length = 3;
  const [val1, val2, val3] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const myStack = new Stack(val1);
  const correct = new CorrectStack(val1);

  describe(`After using pop on an empty Stack`, () => {
    myStack.pop();
    const popReturnValue = myStack.pop();
    correct.pop();
    const correctPopReturnValue = correct.pop();

    const tests = new Tests({
      name: "myStack",
      my: myStack,
      correct,
    });
    const paths = {
      toBeNull: ["top"],
      toBe: ["length"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      ["\n\tpopReturnValue", popReturnValue, "toEqual", correctPopReturnValue],
    ];
    tests.run();
  });

  describe(`After using pop on a Stack that has only one node\n\tconst myStack = new Stack(${val1});\n\tconst popReturnValue = myStack.pop();`, () => {
    myStack.push(val1);
    const popReturnValue = myStack.pop();
    correct.push(val1);
    const correctPopReturnValue = correct.pop();

    const tests = new Tests({
      name: "myStack",
      my: myStack,
      correct,
    });
    const paths = {
      toBeNull: ["top"],
      toBe: ["length"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      ["\n\tpopReturnValue", popReturnValue, "toEqual", correctPopReturnValue],
    ];
    tests.run();
  });

  describe(`After using pop on a NONE-EMPTY stack (length > 1)\n\tconst myStack = new Stack(${val1});\n\tmyStack.push(${val2});\n\tconst popReturnValue = myStack.pop();`, () => {
    myStack.push(val1);
    myStack.push(val2);
    const popReturnValue = myStack.pop();
    correct.push(val1);
    correct.push(val2);
    const correctPopReturnValue = correct.pop();

    const tests = new Tests({
      name: "myStack",
      my: myStack,
      correct,
    });
    const paths = {
      toBeNull: ["top.next"],
      toBe: ["top.value", "length"],
      toEqual: ["top"],
    };
    tests.checkStackInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      ["\n\tpopReturnValue", popReturnValue, "toEqual", correctPopReturnValue],
    ];
    tests.run();
  });
}
