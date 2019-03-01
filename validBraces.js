// Working on equal braces problem from codeWars

/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function validBraces(braces){
  let arrSplit = braces.split('')
  let bracketLeft = 0
  let bracketRight = 0
  let braceLeft = 0
  let braceRight = 0
  let parenthesesLeft = 0
  let parenthesesRight = 0

  for (let i = 0; i < arrSplit.length; i++) {
    if(arrSplit[i] === "["){
      bracketLeft += 1
    }
    if(arrSplit[i] === "]"){
      bracketRight += 1
    }
    if(arrSplit[i] === "{"){
      braceLeft += 1
    }
    if(arrSplit[i] === "}"){
      braceRight += 1
    }
    if(arrSplit[i] === "("){
      parenthesesLeft += 1
    }
    if(arrSplit[i] === ")"){
      parenthesesRight += 1
    }

  }

let right = bracketRight + braceRight + parenthesesRight
let left = bracketLeft + braceLeft + parenthesesLeft
let total = right - left

if(total === 0) {
  return true
} else {
  return false
}

}
