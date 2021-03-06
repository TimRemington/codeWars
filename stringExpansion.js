// working on codewars Problem

/*
Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

stringExpansion('3D2a5d2f') === 'DDDaadddddff'
stringExpansion('3abc') === 'aaabbbccc'      // correct
stringExpansion('3abc') !== 'aaabc'          // wrong
stringExpansion('3abc') !== 'abcabcabc'      // wrong
If there are two consecutive numeric characters the first one is ignored.

stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.

stringExpansion('') === ''
*/

function stringExpansion(s) {
  let result = ""
  let num = 1
  let temp

  if (s.length === 0) {return result}

  for (let i = 0; i < s.length; i++) {
    temp = Number(s[i])
    if (isNaN(temp) === true) {
      for(let j = num; j > 0; j--) {
        result += s[i]
      }
    } else {
      num = Number(s[i])
    }
  }

  return result
}
