// Working on easy codewars problem

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
  let result = 0
  let temp = 0

  for(let i = 0; i < x.length; i++) {
    if(typeof x[i] === "string") {
      temp = Number(x[i])
      result += temp
    } else {
      result += x[i]
    }
  }

  return result

}
