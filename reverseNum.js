// Doing a number manipulation problem in codewars

/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
  let number = n.toString()
  let result = ""
  let negative = ""

  if (number[0] === "-") {
    negative = "-"
    number = number.slice(1, number.length)

  }

  for (let i = number.length - 1; i >= 0; i--) {
    result += number[i]
  }

  return Number(negative + result)
}
