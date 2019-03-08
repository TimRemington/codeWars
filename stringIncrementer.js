// Working on string manipulation problem from codeWars

/*
Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

function incrementString (str) {
  if(str === "") {
    return "1"
  }

  let regex = /[0-9]/g
  let num = str.match(regex)

  if (num === null) {
    return str + "1"
  }

  let remover = num.length
  let numbers = num.join('')
  let zeros = ""

  for (let i = 0; i < remover; i++){
    zeros += "0"
  }


  let plusOne = (+numbers) + 1
  let numString

  if(plusOne.toString().length > zeros.length) {
    numString = plusOne
  } else {
    numString = (zeros + plusOne).slice(-remover)
  }

  return str.substring(0, str.length - remover) + numString

}
