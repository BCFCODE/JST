import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Insert() {
  const length = 4;
  const [val1, val2, val3, val4] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const randomValidIndex = random.between(0, length);
  const randomInvalidIndex = random.notBetween(0, length);
  const newValue = "New Value";

  describe(`After insert to empty linked list\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tconst returnInsertValue = myLinkedList.insert(0, "${newValue}");`, () => {
    let myLinkedList = new LinkedList();
    myLinkedList.pop();
    const returnInsertValue = myLinkedList.insert(0, newValue);

    let correct = new LinkedList();
    correct.pop();
    const correctReturnInsertValue = correct.insert(0, newValue);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next", "tail.next"],
      toBe: ["length", "head.value", "tail.value"],
      toEqual: ["tail", "head"],
    };
    tests.checkLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        `\n\treturnInsertValue`,
        returnInsertValue,
        "toEqual",
        correctReturnInsertValue,
      ],
    ];
    tests.run();
  });

  describe(`After insert "${newValue}" at the ${randomValidIndex === 0 ? "beginning" : randomValidIndex === 4 ? "end" : "middle"} of the linked list (index: ${randomValidIndex})\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tconst returnInsertValue = myLinkedList.insert(${randomValidIndex}, "${newValue}");`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    const returnInsertValue = myLinkedList.insert(randomValidIndex, newValue);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctReturnInsertValue = correct.insert(randomValidIndex, newValue);

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
        `\n\treturnInsertValue`,
        returnInsertValue,
        "toEqual",
        correctReturnInsertValue,
      ],
    ];
    tests.run();
  });

  describe(`After insert "${newValue}" at INVALID index ${randomInvalidIndex} (${randomInvalidIndex < 0 ? "less than zero" : "greater than length"})\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tconst returnInsertValue = myLinkedList.insert(${randomInvalidIndex}, "${newValue}");`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    const returnInsertValue = myLinkedList.insert(randomInvalidIndex, newValue);

    let correct = new CorrectLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctReturnInsertValue = correct.insert(
      randomInvalidIndex,
      newValue,
    );

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
        `\n\treturnInsertValue`,
        returnInsertValue,
        "toEqual",
        correctReturnInsertValue,
      ],
    ];
    tests.run();
  });
}
