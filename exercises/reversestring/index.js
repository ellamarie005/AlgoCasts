// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '');
}

reverse('asdf');
module.exports = reverse;

// Solution 1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }


//Solution 2
// function reverse(str) {
//   let reversed = '';
//   new syntax for for loops
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }