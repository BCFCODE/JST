import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Reverse() {
  const length = 4;
  const [val1, val2, val3, val4] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  describe(`Before reverse\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);

    let correct = new LinkedList(val1);
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

  describe(`After reverse\n\tlet myLinkedList = new LinkedList(${val1});\n\tmyLinkedList.push(${val2});\n\tmyLinkedList.push(${val3});\n\tmyLinkedList.push(${val4});\n\tconst returnReverseValue = myLinkedList.reverse();`, () => {
    let myLinkedList = new LinkedList(val1);
    myLinkedList.push(val2);
    myLinkedList.push(val3);
    myLinkedList.push(val4);
    const returnReverseValue = myLinkedList.reverse();

    let correct = new LinkedList(val1);
    correct.push(val2);
    correct.push(val3);
    correct.push(val4);
    const correctReturnReverseValue = correct.reverse();

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
    tests.checkLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        "\n\treturnReverseValue",
        returnReverseValue,
        "toEqual",
        correctReturnReverseValue,
      ],
    ];
    tests.run();
  });
}
