import { describe, it, expect } from "vitest";
import { changeNameAndSurname, names } from "../../TV-016/replace";

describe(`Replace`, () => {
  it(`const names = [${names.reduce((str, name, i, arr) => str + `${JSON.stringify(name)}${i < arr.length - 1 ? ", " : ""}`, "")}];\n\tchangeNameAndSurname(names) > should create a new array that shows the names with the first name and then the surname.`, () => {
    const result = changeNameAndSurname(names);
    const correct = [
      "James, Smith",
      "Alyssa, Peterson",
      "Lynette, Johnson",
      "Tony, Lopez",
    ];
    expect(result).toEqual(correct);
  });
  it(`should use replace method (return names.replace...)`, () => {
    const result = changeNameAndSurname.toString();
    expect(result).toMatch(/return names.replace/);
  });
});
