// Working on codewars problem

/*

Output
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let regex = /[aeiou]/g
  let vowels = str.match(regex)

  if (vowels === null) {
    return 0
  } else {
    return vowels.length
  }
}
