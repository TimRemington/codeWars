// Doing a binary problem in codewars

/*
We define the operation of splitting a binary number n into two numbers a(n), b(n) as follows. Let 0 ≤ i1 < i2 < . . . < ik be the indices of the bits (with the least significant bit having index 0) in n that are 1. Then the indices of the bits of a(n) that are 1 are i1, i3, i5, . . . and the indices of the bits of b(n) that are 1 are i2, i4, i6, . . .

For example, if n is 110110101 in binary then, again in binary, we have a = 010010001 and b = 100100100.

Input
Each test case consists of a single integer n between 1 and 2^31 − 1 in standard decimal (base 10) format.

Output
The output for each test case consists of a pair of integer, containing the integers a(n) and b(n). Both a(n) and b(n) should be in decimal format.
*/

function splitNumbers(n){
  var s=n.toString(2);
  var a="", b="";
  var count=0;
  for (var i=s.length-1; i>=0; i--)
  {
    if (s[i]=="0")
    {
      a="0"+a;
      b="0"+b;
    }
    else
    {
      if (count%2==0)
      {
        a="1"+a;
        b="0"+b;
        count++;
      }
      else
      {
        a="0"+a;
        b="1"+b;
        count++;
      }
    }
  }
  return [parseInt(a,2),parseInt(b,2)]
}
