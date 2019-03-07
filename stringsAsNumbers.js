// Working on conversion problem from codeWars

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9"
*/

const BigNumber = require('bignumber.js');

function sumStrings(a,b) {
  console.log("a =====> ", typeof a)
  console.log("b =====> ", b)

  let numA, numB

  if ( a === "") {
    numA = 0
  } else {
    numA = new BigNumber(a)
  }

  if ( b === "") {
    numB = 0
  } else {
    numB = new BigNumber(b)
  }

  let total = numB.plus(numA).toString()

  if (total.length > 23) {
    return total.slice(0,1) + total.slice(0, -4).slice(2)
  } else {
    return total
  }
}
