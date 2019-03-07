// Working on conversion problem from codeWars

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9"
*/

function sumStrings(a,b) {
  let total = Number(a) + Number(b)
  return total.toString()
}
