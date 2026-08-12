export const randomIndex = (arr) =>
  Array.from({ length: 2 }).map(() => Math.floor(Math.random() * arr.length));
