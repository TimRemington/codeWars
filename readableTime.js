// Working on conversion problem from codeWars

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


*/

function humanReadable(seconds) {
  let hours = (Math.floor(((seconds % 31536000) % 86400) / 3600)).toString()
  let min = (Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)).toString()
  let sec = ((((seconds % 31536000) % 86400) % 3600) % 60).toString()

  if (hours.length !== 2) {
    while (hours.length !== 2) {
      hours = "0" + hours
    }
  }

  if (min.length !== 2) {
    while (min.length !== 2) {
      min = "0" + min
    }
  }

  if (sec.length !== 2) {
    while (sec.length !== 2) {
      sec = "0" + sec
    }
  }

  return hours + ":" + min + ":" + sec
}
