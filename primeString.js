// Working on string manipulation problem in codewars

/*
Task
The string is called prime if it cannot be constructed by concatenating some (more than one) equal strings together.

For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy").

Given a string determine if it is prime or not.

Input/Output
[input] string s

string containing only lowercase English letters

[output] a boolean value

true if the string is prime, false otherwise
*/

function primeString(s) {
  for(let i=2; i <= s.length; i++){
    if(s.slice(0, s.length/i).repeat(i) == s)
      return false;
    }
  return true;
}
