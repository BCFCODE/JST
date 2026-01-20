export class Heap {
  // ...

  // ...

  // ...

  // ...

  #parent(index) {
    return Math.floor((index - 1) / 2)
  }

  // ...

  // ...

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while (current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  // ...
}