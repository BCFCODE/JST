import { describe } from "vitest";
import { DoublyLinkedList } from "../../../DSA/DLL";
import { CorrectDoublyLinkedList } from "../correct/DLL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Get() {
  random.rangeLimit = 20;

  const [index1, index2] = [0, 3];

  const validIndex = random.between(index1, index2);
  const invalidIndex = random.notBetween(index1, index2);

  let myDoublyLinkedList = new DoublyLinkedList("Value Zero");
  myDoublyLinkedList.push("Value One");
  myDoublyLinkedList.push("Value Two");
  myDoublyLinkedList.push("Value Three");
  const returnValueByRandomValidIndex = myDoublyLinkedList.get(validIndex);
  const returnValueByRandomInvalidIndex = myDoublyLinkedList.get(invalidIndex);

  let correct = new CorrectDoublyLinkedList("Value Zero");
  correct.push("Value One");
  correct.push("Value Two");
  correct.push("Value Three");
  const correctReturnValueByRandomValidIndex = correct.get(validIndex);
  const correctReturnValueByRandomInvalidIndex = correct.get(invalidIndex);

  describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList("Value Zero");\n\tmyLinkedList.push("Value One");\n\tmyLinkedList.push("Value Two");\n\tmyLinkedList.push("Value Three");\n\tconst returnValueByRandomValidIndex = myDoublyLinkedList.get(${validIndex});\n\tconst returnValueByRandomInvalidIndex = myDoublyLinkedList.get(${invalidIndex});`, () => {
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
        "\n\treturnValueByRandomInvalidIndex",
        returnValueByRandomInvalidIndex,
        "toBe",
        correctReturnValueByRandomInvalidIndex,
      ],
    ];
    tests.run();
  });
}
