import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Remove() {
  const length = 5;
  const [val1, val2, val3, val4, val5] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const randomValidIndex = random.between(0, length - 1);
  const randomInvalidIndex = random.notBetween(0, length - 1);
  const newValue = "New Value";

  describe(`After remove INVALID index ${randomInvalidIndex < 0 ? "less than zero" : randomInvalidIndex === length ? "equal to length" : "greater than length"} (index: ${randomInvalidIndex})\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tmyLinkedList.push(${val5});\n\tconst returnRemoveValue = myLinkedList.remove(${randomInvalidIndex});`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    myLinkedList.push(val5);
    const returnRemoveValue = myLinkedList.remove(randomInvalidIndex);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    correct.push(val5);
    const correctReturnRemoveValue = correct.remove(randomInvalidIndex);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next.next.next.next", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "head.next.next.value",
        "head.next.next.next.value",
        "head.next.next.next.next.value",
        "tail.value",
        "length",
      ],
      toEqual: [
        "head",
        "head.next",
        "head.next.next",
        "head.next.next.next",
        "head.next.next.next.next",
        "tail",
      ],
    };
    tests.checkLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        `\n\treturnRemoveValue`,
        returnRemoveValue,
        "toEqual",
        correctReturnRemoveValue,
      ],
    ];
    tests.run();
  });

  describe(`After remove valid index ${randomValidIndex === 0 ? "in the beginning" : randomValidIndex === length - 1 ? "at the end (length - 1)" : "in the middle"} of the linked list (index: ${randomValidIndex})\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tmyLinkedList.push(${val5});\n\tconst returnRemoveValue = myLinkedList.remove(${randomValidIndex});`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    myLinkedList.push(val5);
    const returnRemoveValue = myLinkedList.remove(randomValidIndex);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    correct.push(val5);
    const correctReturnRemoveValue = correct.remove(randomValidIndex);

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
      toEqual: [
        "head",
        "head.next",
        "head.next.next",
        "head.next.next.next",
        "tail",
      ],
    };
    tests.checkLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        `\n\treturnRemoveValue`,
        returnRemoveValue,
        "toEqual",
        correctReturnRemoveValue,
      ],
    ];
    tests.run();
  });
}
