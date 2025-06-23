export class Heap {
  // ...

  // ...

  // ...

  // ...

  // ...

  // ...

  #sinkDown(index) {
    let maxIndex = index
    const size = this.#heap.length
    while (true) {
      const leftIndex = this.#leftChild(index)
      const rightIndex = this.#rightChild(index)

      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
        maxIndex = leftIndex
      }

      if (rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]) {
        maxIndex = rightIndex
      }

      if (maxIndex !== index) {
        this.#swap(index, maxIndex)
        index = maxIndex
      } else {
        return
      }
    }
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while (current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  remove() {
    if (this.#heap.length === 0) {
      return null
    }

    if (this.#heap.length === 1) {
      return this.#heap.pop()
    }

    const maxValue = this.#heap[0]
    this.#heap[0] = this.#heap.pop()
    this.#sinkDown(0)

    return maxValue
  }
}