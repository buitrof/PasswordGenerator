// Assignment Code
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var special = ['!', '@', '#', '$', '%', '^', '&', '*', '?', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.getElementById('generate').addEventListener('click', function generate() {
  var user = prompt(`Do you want your password to contain lower, upper, numeric, or special characters? 
Note that choosing an option to the right will include all options to the left of it.`)
  var passLength = prompt('How long do you want your password to be? (8-128 characters)')
  var randomLetter = "";
  for (i = 0; i < passLength; i++) {
    if (user === 'lower') {
      randomLetter += lower[Math.floor(lower.length * Math.random())];
    } else if (user === 'upper') {
      randomLetter += upper[Math.floor(upper.length * Math.random())];
    } else if (user === 'numeric') {
      randomLetter += numeric[Math.floor(numeric.length * Math.random())];
    } else if (user === 'special') {
      randomLetter += special[Math.floor(special.length * Math.random())];
    }
  }
  if (passLength < 8 || passLength > 128) {
    alert('Please choose a password length between 8 and 128 characters')
    return generate()
  }
  document.getElementById("password").innerText = randomLetter;
})

// Write password to the #password input

// Add event listener to generate button
