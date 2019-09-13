// Working on codewars

/*
Create methods to convert between Bijective Binary strings and integers and back.

A bijective binary number is represented by a string composed only of the characters 1 and 2. Positions have the same value as in binary numbers, a string of repeated 1's has the same value in binary and bijective binary. As there is no symbol for zero it is represented by an empty string.

Every non negative integer has a unique representation unlike binary where 1 = 0001.

https://en.wikipedia.org/wiki/Bijective_numeration

0 = ""
1 = "1"
2 = "2"
3 = "11"
4 = "12"
5 = "21"
6 = "22"
*/

const bijectiveBinary = {
  convertToInt: function(str){
      if (!str) {
        return 0;
      }
      var toInteger = 0;
      for (var i = 0; i < str.length; i++) {
        toInteger += str[i] * Math.pow(2, str.length - (i + 1));
      }
      return toInteger;
  },
  convertFromInt: function(int){

      if (!int) {
        return "";
      }

      var getQ = function(n) {
        return Math.ceil(n / 2) - 1;
      }

      var overTurnString = function(string) {
        var newString = "";
        for (var i = string.length - 1; i >= 0; i--) {
          newString += string[i];
        }
        return newString;
      }

      var prevQ = int;
      var nextQ = getQ(int);
      var toString = "";

      while (prevQ != 0) {
        toString += prevQ - nextQ * 2;
        prevQ = nextQ;
        nextQ = getQ(nextQ);
      }

      return overTurnString(toString);
  }
};
