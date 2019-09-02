// Working on codewars

/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.
*/

function cubeOdd(arr) 
  const cubeOdd = (arr) => {
    if (arr.filter(isNaN).length > 0) { return undefined };
    return arr.reduce((total, num) => (num % 2) ? Math.pow(num, 3) + total : total, 0);
  }
}
