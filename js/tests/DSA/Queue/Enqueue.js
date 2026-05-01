import { describe } from "vitest";
import { Queue } from "../../../DSA/Queue";
import { CorrectQueue } from "../correct/Queue";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Enqueue() {
  const length = 3;
  const [val1, val2, val3] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const myQueue = new Queue(val1);
  myQueue.dequeue();

  const correct = new CorrectQueue(val1);
  correct.dequeue();

  describe(`After enqueue ${val1} to an empty Queue\n\tconst enqueueReturnValue = myQueue.enqueue(${val1})`, () => {
    const enqueueReturnValue = myQueue.enqueue(val1);
    const correctEnqueueReturnValue = correct.enqueue(val1);

    const tests = new Tests({
      name: "myQueue",
      my: myQueue,
      correct,
    });
    const paths = {
      toBeNull: ["first.next", "last.next"],
      toBe: ["first.value", "length"],
      toEqual: ["first", "last"],
    };
    tests.checkQueueInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        "\n\tenqueueReturnValue",
        enqueueReturnValue,
        "toEqual",
        correctEnqueueReturnValue,
      ],
    ];
    tests.run();
  });

  describe(`After enqueue ${val2} to an empty Queue\n\tconst myQueue = new Queue(${val1});\n\tconst enqueueReturnValue = myQueue.enqueue(${val2})`, () => {
    const enqueueReturnValue = myQueue.enqueue(val2);
    const correctEnqueueReturnValue = correct.enqueue(val2);

    const tests = new Tests({
      name: "myQueue",
      my: myQueue,
      correct,
    });
    const paths = {
      toBeNull: ["first.next.next", "last.next"],
      toBe: ["first.value", "first.next.value", "last.value", "length"],
      toEqual: ["first", "first.next", "last"],
    };
    tests.checkQueueInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        "\n\tenqueueReturnValue",
        enqueueReturnValue,
        "toEqual",
        correctEnqueueReturnValue,
      ],
    ];
    tests.run();
  });
}
