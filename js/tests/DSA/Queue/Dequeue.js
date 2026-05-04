import { describe } from "vitest";
import { Queue } from "../../../DSA/Queue";
import { CorrectQueue } from "../correct/Queue";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Dequeue() {
  const length = 3;
  const [val1, val2, val3] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const myQueue = new Queue(val1);
  myQueue.dequeue();

  const correct = new CorrectQueue(val1);
  correct.dequeue();

  describe(`After using dequeue on an empty Queue\n\tconst dequeueReturnValue = myQueue.dequeue()`, () => {
    const dequeueReturnValue = myQueue.dequeue();
    const correctDequeueReturnValue = correct.dequeue();

    const tests = new Tests({
      name: "myQueue",
      my: myQueue,
      correct,
    });
    const paths = {
      toBeNull: ["first", "last"],
      toBe: ["length"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [
        "\n\tdequeueReturnValue",
        dequeueReturnValue,
        "toEqual",
        correctDequeueReturnValue,
      ],
    ];
    tests.run();
  });

  describe(`After using dequeue on a Queue that has only one node\n\tconst myQueue = new Queue(${val1});\n\tconst dequeueReturnValue = myQueue.dequeue()`, () => {
    myQueue.enqueue(val1);
    const dequeueReturnValue = myQueue.dequeue();
    correct.enqueue(val1);
    const correctDequeueReturnValue = correct.dequeue();

    const tests = new Tests({
      name: "myQueue",
      my: myQueue,
      correct,
    });
    const paths = {
      toBeNull: ["first", "last"],
      toBe: ["length"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.extra = [
      [
        "\n\tdequeueReturnValue",
        dequeueReturnValue,
        "toEqual",
        correctDequeueReturnValue,
      ],
    ];
    tests.run();
  });

  describe(`After using dequeue on a NONE-EMPTY Queue (length > 1)\n\tconst myQueue = new Queue(${val1});\n\tmyQueue.enqueue(${val2});\n\tconst dequeueReturnValue = myQueue.dequeue()`, () => {
    myQueue.enqueue(val1);
    myQueue.enqueue(val2);
    const dequeueReturnValue = myQueue.dequeue();
    correct.enqueue(val1);
    correct.enqueue(val2);
    const correctDequeueReturnValue = correct.dequeue();

    const tests = new Tests({
      name: "myQueue",
      my: myQueue,
      correct,
    });
    const paths = {
      toBeNull: ["first.next", "last.next"],
      toBe: ["length", "first.value", "last.value"],
      toEqual: ["first", "last"]
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual)
    tests.extra = [
      [
        "\n\tdequeueReturnValue",
        dequeueReturnValue,
        "toEqual",
        correctDequeueReturnValue,
      ],
    ];
    tests.run();
  }); 
}
