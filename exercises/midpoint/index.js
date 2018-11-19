// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


// slow will move one next node
// fast will move two next nodes
// will result that
function midpoint(list) {
   let slow = list.getFirst();
   let fast = list.getFirst();

   // fast.next checks the node next to current
   // fast.next.next checks two nodes after the current one
   while(fast.next && fast.next.next) {
     slow = slow.next;
     fast = fast.next.next;
   }
   return slow;
}

module.exports = midpoint;
