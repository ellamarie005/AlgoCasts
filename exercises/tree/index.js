// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // traverse bf -> goes through every level one by one
  // example: i want you to print all employees categorized by their position
  // traverse df -> goes through branches from the left one by one
  // example i want you to print all employees base on who they are under
   
  traverseBF(fn) {
    const arr = [this.root];
    // items added at the end
    while(arr.length) {
      // shift method will take out the first thing in the array
      const node =arr.shift();
      
      // for (let child of node.children) {
      //   arr.push(child);
      // } or right it like this. it is the same as the for loop
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    // items added in the beginning
    while(arr.length){
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
