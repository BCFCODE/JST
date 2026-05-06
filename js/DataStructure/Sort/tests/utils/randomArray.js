export const randomArray = () => [
  ...new Set(
    Array.from({ length: Math.ceil(Math.random() * 15) }, () =>
      Math.floor(Math.random() * 9)
    )
  ),
];
