// Working on strings problem from codeWars

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  let words = str.split(' ')
  let letter = ""
  let temp = ""
  let result = []

  for(let i = 0; i < words.length; i++) {
    letter = words[i][0]
    temp = words[i].substring(1)
    result.push(temp + letter + 'ay')
  }

  return result.join(' ')

}
