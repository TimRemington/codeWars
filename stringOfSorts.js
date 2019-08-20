// Working on codewars for warmup

/*
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"

sortString("string", "gnirts") => "gnirts"

sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

function sortString(string,ordering) {
  let cycle = true
  let hangingLetters = ""
  let result = ''

  for(let i = 0; i < ordering.length; i++) {

    for(let j = 0; j < string.length; j++) {
      if(string[j] === ordering[i]) {
        result += string[j]
      }
      if(ordering.indexOf(string[j]) === -1 && cycle) {
        hangingLetters += string[j]
      }
    }

    cycle = false
  }

  return result + hangingLetters
}
