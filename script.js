// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var lengthMessage = prompt("Enter desired length of password (between 8 - 128 characters): ");
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
      
  }
  return retVal;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


