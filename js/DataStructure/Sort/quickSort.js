function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

export {swap, pivot };
