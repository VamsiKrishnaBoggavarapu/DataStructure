/* FIRST IN FIRST OUT */

/* NODE1 -> NODE2 -> NODE3  => Enqueue */

/* NODE2 -> NODE3  => Dequeue */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;

    return this.first;
  }

  dequeue() {
    if (this.size === 0) return null;

    const removedItem = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;

    return removedItem;
  }
}

const queue = new Queue();
console.log(queue.enqueue("One"));
console.log(queue.enqueue("Two"));
console.log(queue.enqueue("Three"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
