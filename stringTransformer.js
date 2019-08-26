// Working on codewars


/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.


*/

function stringTransformer(str) {
  let arr = str.split(' ').reverse()
  let tempString = ''
  let result = []

  for(let i = 0; i < arr.length; i++) {

    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === arr[i][j].toLowerCase()) {
        tempString += arr[i][j].toUpperCase()
      } else {
        tempString += arr[i][j].toLowerCase()
      }
    }
    result.push(tempString)
    tempString = ''
  }

  return result.join(' ')
}
