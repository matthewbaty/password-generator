// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const characterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const characterSpecial = ["!", "@", "#", "$", "%", "^", "*"];
const characterNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// click button to begin generating password 
if ( confirm("Would you like to generate a password?") == true) {
  passwordLength = prompt("Between 8 and 128 characters, how many characters would like the password to be?", "8-128");

  passwordLengthNum = parseInt(passwordLength);
}

console.log(passwordLengthNum);
// for loop to index array for passwordLengthNum


