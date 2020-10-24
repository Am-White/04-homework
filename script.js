// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays: Variables
var passwordLength = " ";
var addLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var addUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var addSymbols = ["!@#$%^&*()_+={}|][:;'?/.>,<`~"];
var addNumbers = ["1234567890"];


//When you click "Generated Password" = this prompt appears
function writePassword() {
  //Password Length
  var passwordLength = (prompt("How many characters do you want your password to contain? (between 8-100 characters)"))
    if (passwordLength <= 6 || passwordLength >= 100) {
      alert ("Password must be between 8 and 100 characters!!"); return;
    }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
