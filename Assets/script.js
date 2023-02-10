// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = window.prompt("How long do you want your password to be?");

  if (passLength < 8 || passLength > 128) {
    window.alert("Your password must be between 8 and 128 characters.")
    return;
  }

  // user questions for possible password characters
  var lowercase = window.confirm("Would you like your password to include lowercase characters?");
  var uppercase = window.confirm("Would you like your password to include uppercase characters?");
  var numeric = window.confirm("Would you like your password to include numbers?");
  var specialChar = window.confirm("Would you like your password to inlcude special characters?");

  // character sets
  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialList = ["!", "@", "#", "$", "%", "^", "*"];

  var passwordContainer = [];

  if (lowercase === true) {
    passwordContainer.push(lowercaseList);
  }

  if (uppercase === true) {
    passwordContainer.push(uppercaseList);
  }

  if (numeric === true) {
    passwordContainer.push(numbersList);
  }

  if (specialChar === true) {
    passwordContainer.push(specialList);
  }

  // this will use lowercase characters if the user did not confirm any prompts 
  if (passLength.length === 0) {
    passwordContainer.push(lowercaseList);
  }

  var generatedPassword = "";
  // for loop to create the password
  for (i = 0; i < passLength; i++) {
    var containerIndex = Math.floor(Math.random() * passwordContainer.length);
    var randomArray = passwordContainer[containerIndex];
    var randomIndex = Math.floor(Math.random() * randomArray.length);
    var randomCharacter = randomArray[randomIndex];
    generatedPassword += randomCharacter;
  }

  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// console.log(passwordLengthNum);
// // for loop to index array for passwordLengthNum


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


