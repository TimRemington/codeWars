// Working on string problem in codewars


/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

-- We shall assign the following values: a = 1, b = 2 ... z = 26.

For example, for the word "zodiacs", solve("zodiacs") = 26
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
Vowels are are a,e,i,o,u.

For C: do not mutate input.

More examples in test cases. Good luck!
*/

function solve(s) {
  let vowels = /[aeiou]/
  let alphabet = '0abcdefghijklmnopqrstuvwxyz'
  let total = 0
  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(vowels) !== null) {
      total = 0
    } else {
      total += alphabet.indexOf(s[i])
      if (total > result) {result = total}
    }
  }

  return result
};

// New way to solve it

// function solve(s) {
//   function getValue(s) {
//     // This gets the value of any substrings as well as individual chars
//     let value = 0;
//     s.split('').map((char, i) => {
//       value += s.charCodeAt(i) - 96;
//     });
//     return value;
//   }
// 
//   const noVowels = s
//     .replace(/[aeiou]/g, " ")
//     .split(" ")
//     .filter(n => n !== "");
//
//   return Math.max(...noVowels.map(substr => getValue(substr)));
// }
