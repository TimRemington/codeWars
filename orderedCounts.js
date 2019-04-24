// Working on object creation problem in codewars

/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

var orderedCount = function (text) {
  let letters = text.split("")
  let uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
  
  return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}
