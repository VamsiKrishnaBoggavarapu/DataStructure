class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    if (!value) return;

    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    let currentNode = this.head;
    let newTail = null;

    if (this.length === 0) {
      return undefined;
    }

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return currentNode;
  }

  shift() {
    const currentNode = this.head;

    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return currentNode;
  }

  unshift(value) {
    if (!value) return;

    if (this.length === 0) {
      return this.push(value);
    }

    const node = new Node(value);
    const currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    let findNode = this.get(index);
    if (!!findNode) {
      findNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (this.length === 0 || index === this.length) {
      this.push(value);
      return true;
    }

    const node = new Node(value);
    let findNode = this.get(index - 1);
    let tempNode = findNode.next;
    findNode.next = node;
    findNode.next.next = tempNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }
    if (index === 0) {
      const shiftNode = this.shift();
      return !!shiftNode;
    }
    if (index === this.length - 1) {
      const popNode = this.pop();
      return !!popNode;
    }
    let findNode = this.get(index - 1);
    findNode.next = findNode.next.next;
    this.length--;
    return true;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode;
    let previousNode = null;

    for (var i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}
