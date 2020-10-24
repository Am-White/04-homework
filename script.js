// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays: Variables
var passwordLength = " ";
var addLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var addUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var addSymbols = ["!@#$%^&*()_+={}|][:;'?/.>,<`~"];
var addNumbers = ["1234567890"];


//When you click "Generated Password" = this prompt appears
function writePassword() {
  //Password Length
  var passwordLength = (prompt("How many characters do you want your password to contain? (between 8-100 characters)"))
    if (passwordLength <= 6 || passwordLength >= 100) {
      alert ("Password must be between 8 and 100 characters!!"); return;
    }
    //Confirming password length
    alert ("Your password will be " + passwordLength + " characters");

//Confirming arrays: Variables
var confirmAddLowercase = confirm("If you would like to include lowercase characters? = click OKAY");
var confirmAddUppercase = confirm("If you would like to include uppercase characters? = click OKAY");
var confirmAddSymbols = confirm("If you would like to include symbol characters? = click OKAY");
var confirmAddNumbers = confirm("If you would like to include numbers? = click OKAY");

var passwordParameter = [];

if (confirmAddLowercase) {
  passwordParameter.push(addLowercase);
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
