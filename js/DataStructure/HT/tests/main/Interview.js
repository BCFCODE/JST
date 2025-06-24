import { describe } from "vitest"
import { formatArgsForDisplay, J } from "../../../../utils"
import { it } from "vitest";
import { expect } from "vitest";

const itemInCommonTests = (itemInCommon) => {
  describe('Interview: itemInCommon', () => {

    const tests = [
      [[[1, 3, 5], [2, 4, 5]], true],
      [[[1, 3, 5], [2, 4, 6]], false],
    ];

    tests.forEach(([params, expectedResult]) => {
      it(`\n\titemInCommon(${formatArgsForDisplay(params)}) >> ${J(expectedResult)}`, () => {
        const result = itemInCommon(...params)
        expect(result).toBe(expectedResult);
      });
    })

  })
}

export default itemInCommonTests


