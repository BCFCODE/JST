export function correctFactorial(n) {
  if (n === 1) return 1;
  return n * correctFactorial(n - 1);
}
