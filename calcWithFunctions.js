// Working on calculator function in codeWars

/*
his time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Ruby:

seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/

function zero(num) {
  if (num === undefined) {return "0"}
  else {return eval("0 " + num)}
}
function one(num) {
  if (num === undefined) {return "1"}
  else {return eval("1 " + num)}
}
function two(num) {
  if (num === undefined) {return "2"}
  else {return eval("2 " + num)}
}
function three(num) {
  if (num === undefined) {return "3"}
  else {return eval("3 " + num)}
}
function four(num) {
  if (num === undefined) {return "4"}
  else {return eval("4 " + num)}
}
function five(num) {
  if (num === undefined) {return "5"}
  else {return eval("5 " + num)}
}
function six(num) {
  if (num === undefined) {return "6"}
  else {return eval("6 " + num)}
}
function seven(num) {
  if (num === undefined) {return "7"}
  else {return eval("7 " + num)}
}
function eight(num) {
  if (num === undefined) {return "8"}
  else {return eval("8 " + num)}
}
function nine(num) {
  if (num === undefined) {return "9"}
  else {return eval("9 " + num)}
}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}
