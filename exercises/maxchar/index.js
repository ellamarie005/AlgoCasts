// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // this for loop is to create the counter
  // 'of' used for array
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // this for loop is for return the character
  // 'in' used for object, which is charMap in this case
  for (let char in charMap) {
    if (charMap[char] > max) {
      // this is updating the max and the maxChar variable
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   for (let char of string) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }
//      OR
//   chars[char] = chars[char] + 1 || 1;
//    need || bc chars[char]+1 will be null if there's none in the beginning
// }