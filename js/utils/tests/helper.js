export const getNestedProperty = (obj, path) =>
  path.split(".").reduce((acc, part) => acc?.[part], obj);

export const formatArgsForDisplay = (arr) =>
  arr.map((p) => JSON.stringify(p)).join`, `;

export const toBeNullTests = ({ my, paths, name }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toBeNull",
    null,
  ]);

export const toEqualTests = ({ name, my, correct, paths }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toEqual",
    getNestedProperty(correct, path),
  ]);

export const toBeTests = ({ name, my, correct, paths }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toBe",
    getNestedProperty(correct, path),
  ]);

export const toBeUndefined = ({ name, my, correct, paths }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toBeUndefined",
    getNestedProperty(correct, path),
  ]);

/**
 * Generates test cases to verify that specific properties exist
 * on an object or on its nested paths.
 *
 * @param {Object} params - Parameters for generating the test cases.
 * @param {string} params.name - A human-readable name used in test descriptions (e.g., 'myQueue').
 * @param {Object} params.obj - The actual object to be tested.
 * @param {string[]} [params.paths=[]] - Optional array of property paths (e.g., ['first', 'last']) within the object to check for nested properties.
 * @param {string[]} params.properties - List of property names expected to exist either on the object directly or on each nested path.
 *
 * @returns {Array<Array>} An array of test cases, where each test case is a 4-element array:
 *   [label: string, actualResult: boolean, matcher: 'toBe', expectedResult: true]
 *
 * @example
 * hasPropertyTests({
 *   name: 'myQueue',
 *   obj: myQueue,
 *   paths: ['first'],
 *   properties: ['value', 'next']
 * })
 *
 * // Returns:
 * [
 *   ['\n\tmyQueue.first.hasOwnProperty("value")', true, 'toBe', true],
 *   ['\n\tmyQueue.first.hasOwnProperty("next")', true, 'toBe', true]
 * ]
 */
export const hasPropertyTests = ({ name, obj, paths = [], properties }) =>
  paths.length
    ? properties.flatMap((property) =>
        paths.map((path) => [
          `\n\t${name}.${path}.hasOwnProperty("${property}")`,
          getNestedProperty(obj, path).hasOwnProperty(property),
          "toBe",
          true,
        ]),
      )
    : properties.map((property) => [
        `\n\t${name}.hasOwnProperty("${property}")`,
        obj.hasOwnProperty(property),
        "toBe",
        true,
      ]);

