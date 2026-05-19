export const SPEED_LIMIT = 70;
export const ONE_POINT = 5;

function checkSpeed(speed) {
  if (speed < SPEED_LIMIT + ONE_POINT) return "Ok";
  const numberOfPoints = Math.floor((speed - SPEED_LIMIT) / ONE_POINT);
  if (numberOfPoints <= 12) return `Point: ${numberOfPoints}`;
  else return "License suspended";
}

export default checkSpeed;
