// Working on basic problem in codewars

/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

function generateShape(int){
  let result = ""
  let plus = ""

  for (let size = 0; size < int; size++) {
    plus += "+"
  }

  for(let i = 0; i < int; i++) {
    if (i < int - 1) {
      result += plus + '\n'
    } else {
      result += plus
    }
  }

  return result
}
