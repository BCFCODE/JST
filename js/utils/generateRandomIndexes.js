export function generateRandomIndexBetween(index1, index2) {
  return Math.floor(Math.random() * (index2 - index1 + 1));
}

export function generateRandomIndexLessThan(index, range) {
  return index - Math.ceil(Math.random() * range);
}

export function generateRandomIndexGreaterThan(index, range) {
  return index + Math.ceil(Math.random() * range);
}

export function generateRandomIndexNotBetween(index1, index2, range) {
  const randomIndexes = [
    generateRandomIndexLessThan(index1, range),
    generateRandomIndexGreaterThan(index2, range),
  ];   
  return randomIndexes[Math.floor(Math.random() * 2)];
} 
