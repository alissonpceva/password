// Assignment code here

function generatePassword() {

var numericCharacters = ['1','2','3','4','5','6','7','8','9','0'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var selectedCharacters = [];


// select password length 

var passwordLength = Number(window.prompt('Choose between 8-128 characters for your password.'));
if (passwordLength < 8 || passwordLength > 128) {
  window.alert ('Please choose a number between 8 to 128.');
  return; // Exit the function if password length is invalid
} else {
  window.alert('Your password will be ' + passwordLength + ' characters long');
}

var confSpecialChar = confirm("Confirm Special Characters for your password")
if (confSpecialChar == true) {
  window.alert('Your password will have special characters');
  selectedCharacters = selectedCharacters.concat(specialCharacter);
} else {
  window.alert('Your password will NOT have special characters');
}

var confNumChar = confirm("Confirm Numeric Characters for your password")
if (confNumChar == true) {
  window.alert('Your password will have numeric characters');
  selectedCharacters = selectedCharacters.concat(numericCharacters);
} else {
  window.alert('Your password will NOT have numeric characters');
}

var confLowCase = confirm("Confirm lower case letters for your password")
if (confLowCase == true) {
  window.alert('Your password will have lower case letters');
  selectedCharacters = selectedCharacters.concat(lowerCase);
} else {
  window.alert('Your password will NOT have lower case letters');
}

var confUpperCase = confirm("Confirm UPPER CASE LETTERS for your password")
if (confUpperCase == true) {
  window.alert('Your password will have UPPER CASE LETTERS');
  selectedCharacters = selectedCharacters.concat(upperCase);
} else {
  window.alert('Your password will NOT have UPPER CASE LETTERS');
}

if (confSpecialChar !== true && confNumChar !== true && confLowCase !== true && confUpperCase !== true) {
  alert('Please select at least one condition');
  return; // Exit the function if no character type is selected
}

var password = '';
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
  password += selectedCharacters[randomIndex];
}

return password;
}
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  