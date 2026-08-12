import { describe } from "vitest";
import { HashTable } from "../../../DSA/HT";
import { CorrectHashTable } from "../correct/HT";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Get() {
  const dataMapSize = random.between(5, 10);

  const myHashTable = new HashTable(dataMapSize);
  const correct = new HashTable(dataMapSize);

  const keyValues = [
    ["bolts", 1400],
    ["washers", 50],
    ["bolts", 1400],
  ];

  keyValues.forEach(([key, value]) => {
    myHashTable.set(key, value);
    correct.set(key, value);
  });

  const validKeys = keyValues.map(([key]) => key);
  const invalidKeys = ["washers", "lumber"];

  describe(`dataMap = [${myHashTable.dataMap.map((data) => `[${data.join`, `}]`).join`, `}]`, () => {
    validKeys.forEach((validKey) => {
      describe(`\n\tdataMap contains this key: ${JSON.stringify(validKey)} (valid key)`, () => {
        const returnValue = myHashTable.get(validKey);
        const correctReturnValue = correct.get(validKey);

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

    invalidKeys.forEach((invalidKey) => {
      describe(`\n\tdataMap does NOT contain this key: ${JSON.stringify(invalidKey)} (invalid key)`, () => {
        const returnValue = myHashTable.get(invalidKey);
        const correctReturnValue = correct.get(invalidKey);

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
  });
}
