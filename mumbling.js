// Working on codewars

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let arr = s.split('')
  let letter = ""
  let word = ""
  let result = []

  for(let i = 0; i < arr.length; i++) {
    letter = arr[i].toLowerCase()
    word += letter.toUpperCase()

    for(let j = 1; j <= i; j++) {
      word += letter
    }

    result.push(word)
    word = ""
  }

  return result.join('-')
}
