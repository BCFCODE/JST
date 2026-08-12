import { it, expect, describe } from "vitest";
import checkSpeed, {
  ONE_POINT,
  SPEED_LIMIT,
} from "../../../../TV/053/control-flow/4-demerit-points";
import Random from "../../../../utils/Random";

const random = new Random();

describe("4-demerit-points", () => {
  const randomOkSpeed = random.between(1, SPEED_LIMIT + ONE_POINT - 1);
  const randomLegalSpeed = random.between(
    SPEED_LIMIT + ONE_POINT,
    SPEED_LIMIT + ONE_POINT + random.between(1, 12) * ONE_POINT,
  );
  const randomIllegalSpeed = SPEED_LIMIT + ONE_POINT + random.greaterThan(12) * ONE_POINT
  it.each([
    {
      scenario: `should return "Ok" if speed < ${SPEED_LIMIT + ONE_POINT}`,
      speed: randomOkSpeed,
      expectedResult: "Ok",
    },
    {
      scenario: `should return "Point: ${Math.floor((randomLegalSpeed - SPEED_LIMIT) / 5)}"`,
      speed: randomLegalSpeed,
      expectedResult: `Point: ${Math.floor((randomLegalSpeed - SPEED_LIMIT) / 5)}`,
    },
    {
      scenario: `should return "License suspended"`,
      speed: randomIllegalSpeed,
      expectedResult: "License suspended" ,
    },
  ])("\n\tcheckSpeed($speed) >> $scenario", ({ speed, expectedResult }) => {
    const result = checkSpeed(speed);
    expect(result).toBe(expectedResult);
  });
});
