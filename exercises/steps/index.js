// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// row = 0 meaning you want it to start at 0
function steps(n, row = 0, stair='') {
  if (n === row) {
    return;
  }
  if ( n === stair.length) {
    console.log(stair);
    // no need to call stair again because it will remain the same
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  // turnery version
  // const add = stair.length <= row ? '#': ' ';
  // then do steps(n, row, stair + add);
  steps(n, row, stair);
}

module.exports = steps;

// Solution 1
// function steps(n) {
//   for (let row =0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// Recursive tips
// 1. Figure out the bare minimum pieces of information to represent your problem
// 2. give reasonable defaults to th bare minimum pieces of information.
// 3. check the base case. is there any work left to do? if Notification, return.information.
// 4. Do some work. Call your function again, making sure the arguments have changed in some fashion.