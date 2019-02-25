// Working on regex problem from codeWars

function validRomans(arr) {
  let reg = /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  let finalArr = []

  for (let i = 0; i < arr.length; i++){
    if(arr[i] === ""){
      console.log(arr[i])
    }
    else if (arr[i].match(reg)[0] === arr[i]) {
      finalArr.push(arr[i])
    }
  }

  return finalArr
}


console.log(validRomans(["MMMCDLXVL", "MDLXXXVI", "DCLXII", "MMMMCLL", "MMDCCCLXXXIVCD"]))
console.log("Expected: ", ["MDLXXXVI", "DCLXII"])

console.log(validRomans(["MMMMCCCXXXII", "MMDCCCXXVCD", "MMCCCXLV", "DCCLXVIIICD", "MMMMCXII"]))
console.log("Expected: ",  ["MMMMCCCXXXII", "MMCCCXLV", "MMMMCXII"])
