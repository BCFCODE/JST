import { describe } from "vitest";
import { Stack } from "../../../DSA/Stack";
import { CorrectStack } from "../correct/Stack";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Push() {
  const length = 3;
  const [val1, val2, val3] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  let correct = new CorrectStack(val1);
  correct.pop();

  let myStack = new Stack(val1);
  myStack.pop();

  describe(`After push ${val2} to an empty Stack\n\tlet myStack = new Stack(${val1});\n\tmyStack.pop();\n\tconst pushReturnValue = myStack.push(${val2})`, () => {
    const pushReturnValue = myStack.push(val2);
    const correctPushReturnValue = correct.push(val2);

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
      [
        "\n\tpushReturnValue",
        pushReturnValue,
        "toEqual",
        correctPushReturnValue,
      ],
    ]; 
    tests.run();
  });

  describe(`After push ${val3} to an empty Stack\n\tlet myStack = new Stack(${val1});\n\tmyStack.pop();\n\tmyStack.push(${val2})\n\tconst pushReturnValue = myStack.push(${val3})`, () => {
    const pushReturnValue = myStack.push(val3);
    const correctPushReturnValue = correct.push(val3);

    const tests = new Tests({
      name: "myStack",
      my: myStack,
      correct,
    });
    const paths = {
      toBeNull: ["top.next.next"],
      toBe: ["top.value", "top.next.value", "length"],
      toEqual: ["top", "top.next"],
    };
    tests.checkStackInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        "\n\tpushReturnValue",
        pushReturnValue,
        "toEqual",
        correctPushReturnValue,
      ],
    ];
    tests.run();
  });
}
