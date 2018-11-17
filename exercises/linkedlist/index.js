// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // next = null as default so when no next is passed through it will automatically equal to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    //insertFirst = will create it then you have to link it
    // const node = newNode(data, this.head);
    // need to update that this.head is now the node
    // this.head = node;

    //all that can be written like this.
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };

