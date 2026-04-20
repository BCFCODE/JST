import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Get() {
  random.rangeLimit = 20;

  const [index1, index2] = [0, 3];

  const validIndex = random.between(index1, index2);
  const invalidIndex = random.notBetween(index1, index2);

  let myLinkedList = new LinkedList("Value Zero");
  myLinkedList.push("Value One");
  myLinkedList.push("Value Two");
  myLinkedList.push("Value Three");
  const returnValueByRandomValidIndex = myLinkedList.get(validIndex);
  const returnValueByRandomInvalidIndex = myLinkedList.get(invalidIndex);

  let correct = new CorrectLinkedList("Value Zero");
  correct.push("Value One");
  correct.push("Value Two");
  correct.push("Value Three");
  const correctReturnValueByRandomValidIndex = correct.get(validIndex);
  const correctReturnValueByRandomInvalidIndex = correct.get(invalidIndex);

  describe(`\n\tlet myLinkedList = new LinkedList("Value Zero");\n\tmyLinkedList.push("Value One");\n\tmyLinkedList.push("Value Two");\n\tmyLinkedList.push("Value Three");\n\tconst returnValueByRandomValidIndex = myLinkedList.get(${validIndex});\n\tconst returnValueByRandomInvalidIndex = myLinkedList.get(${invalidIndex});`, () => {
    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next.next.next", "tail.next"],
      toBe: ["head.value", "tail.value", "length"],
      toEqual: ["head", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.checkLLInternalStructure();
    tests.manual = [
      [
        "\n\treturnValueByRandomValidIndex",
        returnValueByRandomValidIndex,
        "toEqual",
        correctReturnValueByRandomValidIndex,
      ],
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
