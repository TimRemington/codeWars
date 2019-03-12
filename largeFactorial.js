// Working on large number problem from codeWars

/*
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.
*/

function factorial(userInt){
  // Edge case of 0
  if(n===0)
    return '1'

  // Edge case of nothing
  if(!n)
    return ''

  let i
  let nextNum
  let carret

  result = n.toString().split('').reverse().map(Number)

  while(--n){
    i = carret = 0

    while((nextNum = result[i++]) !== undefined || carret) {
      carret = (nextNum || 0) * n + carret
      result[i-1] = carret % 10
      carret = parseInt(carret/10)
    }
  }

  return result.reverse().join('')
}
