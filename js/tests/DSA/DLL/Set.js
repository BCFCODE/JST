import { describe } from "vitest";
import { DoublyLinkedList } from "../../../DSA/DLL";
import { CorrectDoublyLinkedList } from "../correct/DLL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";
import { expect } from "vitest";

const random = new Random();

export default function Set() {
  const length = 4;
  const [val1, val2, val3, val4] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const randomValidIndex = random.between(0, length - 1);
  const randomInvalidIndex = random.notBetween(0, length - 1);
  const newValue = "New Value";

  describe(`After set valid index\n\tlet myDoublyLinkedList = new DoublyLinkedList(${val1});\n\tmyDoublyLinkedList.push(${val2});\n\tmyDoublyLinkedList.push(${val3});\n\tmyDoublyLinkedList.push(${val4});\n\tmyDoublyLinkedList.set(${randomValidIndex}, "${newValue}")`, () => {
    let myDoublyLinkedList = new DoublyLinkedList(val1);
    myDoublyLinkedList.push(val2);
    myDoublyLinkedList.push(val3);
    myDoublyLinkedList.push(val4);
    const setReturnValue = myDoublyLinkedList.set(randomValidIndex, newValue);

    let correct = new CorrectDoublyLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctSetReturnValue = correct.set(randomValidIndex, newValue);

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.prev", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "head.next.next.value",
        "head.next.next.next.value",
        "tail.prev.prev.prev.value",
        "tail.prev.prev.value",
        "tail.prev.value",
        "tail.value",
        "length",
      ],
    };
    tests.checkDLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [
        `\n\tconst setReturnValue = myDoublyLinkedList.set(${randomValidIndex}, "${newValue}");\n\tsetReturnValue`,
        setReturnValue,
        "toBe",
        correctSetReturnValue,
      ],
    ];
    tests.run();
  });

  describe(`After set INVALID index\n\tlet myDoublyLinkedList = new DoublyLinkedList(${val1});\n\tmyDoublyLinkedList.push(${val2});\n\tmyDoublyLinkedList.push(${val3});\n\tmyDoublyLinkedList.push(${val4});\n\tmyDoublyLinkedList.set(${randomInvalidIndex}, "${newValue}")`, () => {
    let myDoublyLinkedList = new DoublyLinkedList(val1);
    myDoublyLinkedList.push(val2);
    myDoublyLinkedList.push(val3);
    myDoublyLinkedList.push(val4);
    const setReturnValue = myDoublyLinkedList.set(randomInvalidIndex, newValue);

    let correct = new CorrectDoublyLinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctSetReturnValue = correct.set(randomInvalidIndex, newValue);

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.prev", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "head.next.next.value",
        "head.next.next.next.value",
        "tail.prev.prev.prev.value",
        "tail.prev.prev.value",
        "tail.prev.value",
        "tail.value",
        "length",
      ],
    };
    tests.checkDLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [
        `\n\tconst setReturnValue = myDoublyLinkedList.set(${randomInvalidIndex}, "${newValue}");\n\tsetReturnValue`,
        setReturnValue,
        "toBe",
        correctSetReturnValue,
      ],
    ];
    tests.run();
  });
}
