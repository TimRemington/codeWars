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
  let arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }

  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr.length; k++) {
      for (var p = 0; p < arr.length; p++) {

        let a2 = Math.pow(arr[i], 2)
        let b2 = Math.pow(arr[k], 2)
        let c2 = Math.pow(arr[p], 2)

        if(a2 + b2 == c2 && arr[i] + arr[k] + arr[p] == n) {
          return [arr[i], arr[k], arr[p]]
        }
      }
    }
  }
  return []

}
