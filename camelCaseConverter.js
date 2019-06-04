// Working on codewares problem

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
  if(str === "") {return ''}

  let splitter
  let result = []
  let currentStr
  let firstLetter = ""
  let endOfStr = ""

  if(str.includes("_")) {
    splitter = str.split("_")
  } else {
    splitter = str.split("-")
  }

  result.push(splitter[0])

  for(let i = 1; i < splitter.length; i++) {
    currentStr = splitter[i]
    firstLetter = currentStr[0].charAt(0).toUpperCase()
    endOfStr = currentStr.slice(1)
    result.push(firstLetter + endOfStr)
    firstLetter = ""
    endOfStr = ""
  }

  return result.join('')

}
