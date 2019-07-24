// Quick warm up today

/*
Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
*/

function oddCount(n){
  let result = 0
  for(let i = n - 1; i > 0; i--) {
    if(i % 2 === 1) { result++ }
  }
  return result
}

// Other way to do it:
// function oddCount(n){
//   let result = 0
//
//   if (n % 2 === 0) {return n / 2}
//   if (n % 2 === 1) {return (n - 1) / 2}
//
// }
