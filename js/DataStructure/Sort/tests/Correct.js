class Correct {
  bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  insertionSort(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
      temp = array[i];
      for (var j = i - 1; array[j] > temp && j > -1; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = temp;
    }
    return array;
  }

  merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        combined.push(array1[i]);
        i++;
      } else {
        combined.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      combined.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      combined.push(array2[j]);
      j++;
    }
    return combined;
  }

  mergeSort(array) {
    if (array.length === 1) return array;

    let midIndex = Math.floor(array.length / 2);
    let left = this.mergeSort(array.slice(0, midIndex));
    let right = this.mergeSort(array.slice(midIndex));

    return this.merge(left, right);
  }

  swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }

  pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (array[i] < array[pivotIndex]) {
        swapIndex++;
        this.swap(array, swapIndex, i);
      }
    }
    this.swap(array, pivotIndex, swapIndex);
    return swapIndex;
  }

  quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = this.pivot(array, left, right);
      this.quickSort(array, left, pivotIndex - 1);
      this.quickSort(array, pivotIndex + 1, right);
    }
    return array;
  }

  selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
    return array;
  }
}

export default Correct;
