import { describe } from "vitest";
import { HashTable } from "../../../DSA/HT";
import { CorrectHashTable } from "../correct/HT";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Set() {
  const dataMapSize = random.between(7, 15);
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
    describe(`After set key: ${JSON.stringify(key)} and value: ${value} (dataMap size: ${dataMapSize})\n\tconst myHashTable = new HashTable(${dataMapSize});\n\tconst returnValue = myHashTable.set(${JSON.stringify(key)}, ${value});`, () => {
      const returnValue = myHashTable.set(key, value);
      const correctReturnValue = correct.set(key, value);

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
