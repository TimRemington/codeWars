// Working on codewars

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
  let arr = s.split(' ')
  let result = arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  })
  return result.join(' ')
}
