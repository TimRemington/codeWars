// Working on codewars problem

/*
So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.

If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'
*/

function meeting(x, need){

  if (need == 0) {return 'Game On'};
  let took = [];

  let freeChairsInRooms = x
  .map(r => { let i = r[1] - r[0].length; return i <= 0 ? 0 : i; })
  if (freeChairsInRooms.reduce((a,b) => a+b,0) < need) { return 'Not enough!' }

  for (let i = 0; i < freeChairsInRooms.length; i++) {
    let chairs = freeChairsInRooms[i];
    if (need != 0) {
      if (need - chairs >= 0) { need -= chairs; took.push(chairs); continue;
      } else { took.push(need); need -= need; continue; };
    } else { break; }
  }

  return took;

} 

// function meeting(x, need){
//   let result = []
//   let total = need
//   let temp = 0
//   let counter = 0
//
//   if (need === 0) {return 'Game On'}
//
//   for (let i = 0; i < x.length; i++) {
//     temp = x[i][1] - x[i][0].length
//
//     if (temp > 0) {
//       counter = total
//       total -= temp
//       console.log(total)
//       if (total > 0) {
//         result[i] = temp
//       } else {
//         result[i] = counter
//         return result
//       }
//
//
//     } else {
//       result[i] = 0
//     }
//
//   }
//
//   return 'Not enough!'
// }
