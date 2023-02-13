// Assignment Code
var generateBtn = document.querySelector("#generate");

// whole function to generate password
function generatePassword() {
  var passLength = window.prompt("How long do you want your password to be?");

  if (passLength < 8 || passLength > 128) {
    window.alert("Your password must be between 8 and 128 characters.")
    return;
  }
  // declared variables
  var lowercase, uppercase, numeric, specialChar;
  // character sets
  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialList = ["!", "@", "#", "$", "%", "^", "*"];

  var passwordContainer = [];
  //built function that forces the user to select at least one character type, will continue to loop until one is chosen. 
  function getPasswordDetails(){
    lowercase = window.confirm("Would you like your password to include lowercase characters?");
    uppercase = window.confirm("Would you like your password to include uppercase characters?");
    numeric = window.confirm("Would you like your password to include numbers?");
    specialChar = window.confirm("Would you like your password to include special characters?");
    if (!lowercase && !uppercase && !numeric && !specialChar) {
      window.alert("You must select at least one character type!");
      getPasswordDetails();
    }

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

  }
  getPasswordDetails();

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

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


