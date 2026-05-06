import { it, expect, describe } from "vitest";
import { validateUserInput } from "../../../TV/052/src/core";

describe("Exercise: Positive and negative testing", () => {
  describe("\n\tPositive tests", () => {
    const validUser = { name: "Morteza", age: 36 };
    const result = validateUserInput(validUser.name, validUser.age);
    it(`validateUserInput("${validUser.name}", ${validUser.age});\n\t>> should return 'Validation successful'`, () => {
      expect(result).toBe("Validation successful");
    });
  });
  describe("\n\tNegative tests", () => {
    const tests = [
      {
        username: 3423,
        age: 36,
        message: "type of username should be 'string'",
        expected: { method: "toBe", value: "Invalid username" },
      },
      {
        username: "Mo",
        age: 36,
        message: "length of the username should be more <= 3",
        expected: { method: "toBe", value: "Invalid username" },
      },
      {
        username: "Morteza",
        age: "Thirty Six",
        message: "Type of age should be number",
        expected: { method: "toBe", value: "Invalid age" },
      },
      {
        username: "Morteza",
        age: 3,
        message: "Age should be greater or equal to 18",
        expected: { method: "toBe", value: "Invalid age" },
      },
      {
        username: true,
        age: "12343",
        message:
          "Type of username should be 'string', and type of age should be 'number'",
        expected: { method: "toBe", value: "Invalid username, Invalid age" },
      },
      {
        username: "M",
        age: "12343",
        message:
          "Length of the username should be greater or equal to 3, and type of age should be 'number'",
        expected: { method: "toBe", value: "Invalid username, Invalid age" },
      },
      {
        username: "M",
        age: "12343",
        message:
          "Length of the username should be greater or equal to 3, and age must me greater or equal to 18",
        expected: { method: "toBe", value: "Invalid username, Invalid age" },
      },
      {
        username: true,
        age: 6,
        message:
          "Type of username should be 'string', and age must me greater or equal to 18",
        expected: { method: "toBe", value: "Invalid username, Invalid age" },
      },
    ];
    tests.forEach(({ username, age, message, expected }) => {
      it(`validateUserInput("${username}", ${age});\n\t>> ${message}`, () => {
        const result = validateUserInput(username, age);
        expect(result)[expected.method](expected.value);
      });
    });
  });
});
