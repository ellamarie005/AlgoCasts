// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((char, i) => {
     // str.length takes the number of characters in the array, 
     // and i - 1 allows for it to for to the end of the array
     return char === str[str.length - i -1 ];
   });
}

module.exports = palindrome;

// my solution
// function palindrome(str) {
//   var pal = str.split('').reverse().join('');
//   if (str == pal) {return true} else return false;
// }

// Solution 1
// function palindrome(str) {
//   const pal = str.split('').reverse().join('');
//   return str === pal;
// }

// Solution 2
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     // str.length takes the number of characters in the array, 
//     // and i - 1 allows for it to for to the end of the array
//     return char === str[str.length - i -1 ];
//   });
// }