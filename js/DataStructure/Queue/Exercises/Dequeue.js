class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this
  }

  // WRITE DEQUEUE METHOD HERE //
  //                           //
  //                           //
  //                           //
  //                           //
  ///////////////////////////////

}


