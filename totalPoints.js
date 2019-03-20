// Working on math problem from codeWars

/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
  let result = 0
  let temp = ''
  let x = 0
  let y = 0

  for (let i = 0; i < games.length; i++) {
    temp = games[i].split("")
    x = Number(temp[0])
    y = Number(temp[2])

    if(x > y){
      result +=3
    } else if(y === x) {
      result += 1
    } else {
      result += 0
    }
  }

  return result
}
