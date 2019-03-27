// Doing array problem in codewars

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
  console.log(iterable)

  let newStr
  let result = []
  if (typeof iterable !== "string") {
    newStr = iterable
    for (let i = 0; i < newStr.length; i++) {
      if(newStr[i] !== newStr[i + 1] && newStr[i] !== newStr[i + 2] && newStr[i] !== ",") {
        result.push(newStr[i])
      }
    }
  } else {
    newStr = iterable
    for (let i = 0; i < newStr.length; i++) {
      if(newStr[i] !== newStr[i + 1] && newStr[i] !== newStr[i + 2] && newStr[i] !== ",") {
        result.push(newStr[i])
      }
    }
  }

  return result
}
