// Working on converter problem from codeWars

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  let converter = (+n).toString(2)
  let splitArr = converter.split('')
  let result = 0

  for (let i = 0; i < splitArr.length; i++){
    result += Number(splitArr[i])
  }

  return result
}
