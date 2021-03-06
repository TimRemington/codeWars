// Working on codewars problem

/*
Little Petya very much likes arrays consisting of N integers > 0. Recently he has received one such array as a gift from his mother. Petya didn't like it at once. He decided to choose exactly one element from the array and replace it with another integer > 0. It is not allowed to replace a number with itself or to change no number at all.

 After the replacement Petya sorted the array by the numbers' non-decreasing. Now he wants to know for each position: what minimum number could occupy it after the replacement and the sorting.

Input:
 Input contains array with N integers — the array's description. All elements of the array > 0.

Output:
 Return array with N integers — the minimum possible values of each array element after one replacement and the sorting are performed.

Examples:

([1,2,3,4,5])  =>  [1,1,2,3,4]
([4,2,1,3,5])  =>  [1,1,2,3,4]
([2,3,4,5,6])  =>  [1,2,3,4,5]
([2,2,2])      =>  [1,2,2]
*/

function replacement(arr){
  let index = arr.indexOf(Math.max(...arr));
  let min = Math.min(...arr);

  if (min === 1) {
      let all1Arr = arr.every(a => a === 1);
      if (all1Arr)
        arr[index] = 2
      else
        arr[index] = 1;


  } else {
     arr[index] = 1;
  }


  return arr.sort((a,b) => a-b);

}
