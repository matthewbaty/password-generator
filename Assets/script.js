// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  for (i - 0; i < passwordLengthNum++; i++) {
  }
}

// click button to begin generating password 
if ( confirm("Would you like to generate a password?") == true) {
  passwordLength = prompt("Between 8 and 128 characters, how many characters would like the password to be?", "8-128");

  passwordLengthNum = parseInt(passwordLength);
}

var lowercase = window.confirm("Would you like your password to include lowercase characters?");
var uppercase = window.confirm("Would you like your password to include uppercase characters?");
var numeric = window.confirm("Would you like your password to include numbers?");
var specialChar = window.confirm("Would you like your password to inlcude special characters?");

const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialList = ["!", "@", "#", "$", "%", "^", "*"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

console.log(passwordLengthNum);
// for loop to index array for passwordLengthNum

// prompts for pw requirements: LENGTH (8-128); LOWERCASE; UPPERCASE; NUMERIC; SPECIAL
// return [Math.floor(Math.random(charactersUpper.length))]
// return [Math.floor(Math.random(charactersLower.length))]
// return [Math.floor(Math.random(charactersSpecial.length))]
// return [Math.floor(Math.random(characterNumber.length))]