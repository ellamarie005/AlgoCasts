// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// 1. create 'result' which is the first character of the input string capitalized
// 2. for each character in the string
//   1. if the character to the left is a space then capitalize the letter
//   2. else ad it to the result variable created above
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i=1; i<str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

// Solution 1
// function capitalize(str) {
//   const words = [];

//   // split the string and make it equal to word
//   for (let word of str.split(' ')) {
//     // push the first letter and the sliced part of the letter into the words array
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   // join the pushed items and make it a string.
//   return words.join(' ');
// }