// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


// check if slow an fast end up pointing in one node == this would mean that it is a circular list
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // if next and next.next exist for through the while loop else return false
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

module.exports = circular;
