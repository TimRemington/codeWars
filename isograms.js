// Working on isograms problem from codeWars

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str){
  let arrSplit = str.split('')
  let letter = ""

  while (arrSplit.length > 0) {
    letter = arrSplit.pop().toLowerCase()
    console.log(letter)

    for (let i = 0; i < arrSplit.length; i++) {
      if(letter === arrSplit[i].toLowerCase()){
        return false
      }
    }

  }

  return true
}
