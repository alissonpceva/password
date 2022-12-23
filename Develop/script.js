// Assignment code here

const promptPassword = fuction() {

  const choice  = window.prompt('how many characters would you like your password to contain?');
    
    function selectAgain() {
      const selectAgain = window.confirm('8 characters minimum required, max is 128 characters');
    
    }
    }
    
    // if (selectAgain) {return characterChoice();}
  
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
  
  // click ok to confirm special characters
  
  // click ok to confirm including numeric characters
  
  // click ok to confirm including lower characters
  
  // click ok to confirm including upper characters 
  
  