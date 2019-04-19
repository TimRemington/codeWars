// Working on string manipulation problem in codewars

/*
You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.
*/

function shiftLeft(s, t) {
  let i = s.length, j = t.length;
  while (i >= 0 && j >= 0 && s[i] == t[j])
    i--, j--;
  return (i + 1) + (j + 1);
}

//
// function shiftLeft(s, t){
//   let max = s.length
//   let long = s
//   let short = t
//   let count = 0
//
//   if (max < t.length) {
//     max = t.length
//     long = t
//     short = s
//   }
//
//
//   for (let i = 0; i < max; i++) {
//
//     if (short === long) {
//       return count
//     }
//
//     long = long.substring(1)
//     count++
//
//     if (short === long) {
//       return count
//     }
//
//     if (short.length >= long.length) {
//       short = short.substring(1)
//       count++
//     }
//
//     if (short === long) {
//       return count
//     }
//
//   }
//   return count
//
// }
