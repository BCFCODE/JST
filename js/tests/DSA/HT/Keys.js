import { describe } from "vitest";
import { HashTable } from "../../../DSA/HT";
import { CorrectHashTable } from "../correct/HT";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Keys() {
  const dataMapSize = random.between(1, 7);

  const myHashTable = new HashTable(dataMapSize);
  const correct = new CorrectHashTable(dataMapSize);

  const keyValues = [
    ["bolts", 1400],
    ["bolts", 200],
    ["bolts", 170],
    ["washers", 50],
    ["washers", 1900],
    ["lumber", 900],
  ];

  keyValues.forEach(([key, value]) => {
    myHashTable.set(key, value);
    correct.set(key, value);
  });

  const dataMapStr = `[${myHashTable.dataMap.map((data) => JSON.stringify(data).replace(/,/g, ", ")).join`, `}]`;

  describe(`const myHashTable = new HashTable(${dataMapSize}); \n\tmyHashTable.dataMap >> ${dataMapStr}`, () => {
    describe(`\n\tconst returnValue = myHashTable.keys()`, () => {
      const returnValue = myHashTable.keys();
      const correctReturnValue = correct.keys();

      const tests = new Tests({
        name: "myHashTable",
        my: myHashTable,
        correct,
      });

      tests.extra = [
        ["\n\treturnValue", returnValue, "toEqual", correctReturnValue],
      ];

      tests.run();
    });
  });
}
