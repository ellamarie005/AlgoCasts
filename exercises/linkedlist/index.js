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

    //you can also write this if insertAt is available
    // this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    // getting the last node by calling the getLast function
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty so we will need to just create one
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if(counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    // if list is empty
    if (!this.head) {
      return null;
    }

    //deletes first node
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    // will reuse getAt to get previous and the next two nodes after 
    const previous = this.getAt(index -1);
    if(!previous|| !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // if the list is empty
    if (!this.head) {
      this.head = new Node(data);
    }

    // if the index is pointing at zero, we will create one and make sure that this.head is looking at teh new node
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // function this.getAt helps finding the location of the index
    // node is the new data created, and it is making sure that it is looking at the node after the previous
    // this.getLast allows for the previous to find the last and add node if it is out of bounds
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    // this allows for previous to look at the update node
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };

