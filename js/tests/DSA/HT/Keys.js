import { describe } from "vitest";
import { HashTable } from "../../../DSA/HT";
import { CorrectHashTable } from "../correct/HT";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Keys() {
  const dataMapSize = random.between(5, 7);

  const myHashTable = new HashTable(dataMapSize);
  const correct = new HashTable(dataMapSize);

  const keyValues = [
    ["bolts", 1400],
    ["washers", 50],
    ["bolts", 1400],
    ["washers", 50],
    ["lumber", 70],
  ];

  keyValues.forEach(([key, value]) => {
    myHashTable.set(key, value);
    correct.set(key, value);
  });

  const validKeys = keyValues.map(([key]) => key);
  const invalidKeys = ["washers", "lumber"];

  describe(`dataMap = [${myHashTable.dataMap.map((data) => `[${data.join`, `}]`).join`, `}]`, () => {
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
