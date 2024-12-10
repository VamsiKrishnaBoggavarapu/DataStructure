/* LAST IN FIRST OUT */

/*  NODE3 <- NODE2 <- NODE1   => Push */
/*  NODE2 <- NODE1  => Pop */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
    this.size++;

    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const removedItem = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;

    return removedItem;
  }
}

const stack = new Stack();
console.log(stack.push("One"));
console.log(stack.push("Two"));
console.log(stack.push("Three"));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
