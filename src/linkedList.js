import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    this.size += 1;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    this.size += 1;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;

      while (current.next !== this.tail) {
        current = current.next;
      }

      current.next = null;
      this.tail = current;
    }
    this.size -= 1;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (value == current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (value == current.value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += ` ( ${current.value} ) ->`;
      current = current.next;
    }
    result += ' null';
    return result;
  }

  insertAt(value, index) {
    this.size += 1;

    if (index === 0) {
      this.prepend(value);
    }

    if (index === this.size) {
      this.append(value);
    }

    const newNode = new Node(value);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size -= 1;
      return;
    }

    if (index === this.size - 1) {
      this.pop();
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.size -= 1;
  }
}
