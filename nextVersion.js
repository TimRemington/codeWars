// Working on version script for codewars

/*
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice
Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

nextVersion("1.2.3") === "1.2.4";
nextVersion("0.9.9") === "1.0.0.";
nextVersion("1") === "2";
nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
nextVersion("9.9") === "10.0";
Rules
All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.

You can assume all tests inputs to be valid.
*/

function nextVersion(ver){
  var arr = ver.split(".").map(el => parseInt(el));
  for (var i = arr.length - 1; i >= 0; i--) {
     if (arr[i] + 1 == 10 && i != 0) {
       arr[i] = 0;
     } else {
       arr[i]++;
       break;
     }
  }
  return arr.join(".");
}

// function nextVersion(version){
//   let arr = version.split('.')
//   let length = arr.length
//   let lastnum = arr.length - 1
//   let num = 0
//   let result = []
//   let active = true
//
//   for (let i = length; i > 0; i--) {
//     num = Number(arr[lastnum]) + 1
//
//     if (num === 10 && active === true) {
//       if(lastnum === 0) {
//         num.toString()
//         result.unshift(num)
//       } else {
//         result.unshift("0")
//       }
//     } else if (active === true) {
//       result.unshift(num.toString())
//       active = false
//     } else {
//       result.unshift(arr[lastnum])
//       active = false
//     }
//
//     lastnum--
//   }
//
//   return result.join(".")
// }
