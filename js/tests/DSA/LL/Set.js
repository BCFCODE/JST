import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Set() {
  const length = 4;
  const [val1, val2, val3, val4] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const randomValidIndex = random.between(0, length - 1);
  const randomInvalidIndex = random.notBetween(0, length - 1);
  const newValue = "New Value";

  describe(`Before set any index\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next.next.next", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "head.next.next.value",
        "head.next.next.next.value",
        "tail.value",
        "length",
      ],
      toEqual: ["head", "head.next", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.checkLLInternalStructure();
    tests.run();
  });

  describe(`After set valid index\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tmyLinkedList.set(${randomValidIndex}, "${newValue}")`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    const setReturnValue = myLinkedList.set(randomValidIndex, newValue);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctSetReturnValue = correct.set(randomValidIndex, newValue);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next.next.next", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "head.next.next.value",
        "head.next.next.next.value",
        "tail.value",
        "length",
      ],
      toEqual: ["head", "head.next", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.manual = [
      [
        `\n\tconst setReturnValue = myLinkedList.set(${randomValidIndex}, "${newValue}");\n\tsetReturnValue`,
        setReturnValue,
        "toBe",
        correctSetReturnValue,
      ],
    ];
    tests.checkLLInternalStructure();
    tests.run();
  });

  describe(`After set INVALID index\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tmyLinkedList.set(${randomInvalidIndex}, "${newValue}")`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    const setReturnValue = myLinkedList.set(randomInvalidIndex, newValue);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctSetReturnValue = correct.set(randomInvalidIndex, newValue);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next.next.next", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "head.next.next.value",
        "head.next.next.next.value",
        "tail.value",
        "length",
      ],
      toEqual: ["head", "head.next", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.manual = [
      [
        `\n\tconst setReturnValue = myLinkedList.set(${randomInvalidIndex}, "${newValue}");\n\tsetReturnValue`,
        setReturnValue,
        "toBe",
        correctSetReturnValue,
      ],
    ];
    tests.checkLLInternalStructure();
    tests.run();
  });
}
