// Working on math problem from codeWars

/*
Pythagorean Triples
A Pythagorean triplet is a set of three numbers a, b, and c where a^2 + b^2 = c^2. In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function pythagorean_triplet.

Your task
In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function, where 0 < n < 10000000

Examples
One such triple is 3, 4, 5. For this challenge, you would be given the value 60 as the argument to your function, and then it would return the Pythagorean triplet in an array [3, 4, 5] which is returned in increasing order. 3^2 + 4^2 = 5^2 since 9 + 16 = 25 and then their product (3 * 4 * 5) is 60.

More examples:

argument	returns
60	[3, 4, 5]
780	[5, 12, 13]
2040	[8, 15, 17]
*/

function pythagoreanTriplet (n) {
  let a2 = 0
  let b2 = 0
  let c2 = 0

  for (var i = 3; i < n / 11; i++) {
    a2 = i * i
    for (var k = 2; k < n / 11; k++) {
      b2 = k * k
      for (var p = 1; p < n / 11; p++) {
        c2 = p * p

        if(i * k * p > n) {
          p = n
        }

        if(a2 + b2 == c2 && i * k * p == n) {
          return [i, k, p]
        }
      }
    }
  }
  return []

}