// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays: Variables
var passwordLength = " ";
var addLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var addUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var addSymbols = ["!","@","#","$","%","^","&","*","(",")","_","+","=","{","}","|","]","[",":",";","'","?","/",".",">",",","<","`","~"];
var addNumbers = ["1","2","3","4","5","6","7","8","9","0"];

function writePassword(){
  
  //Adds password to input
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

      passwordText.value = password;
}

function generatePassword(){
  
  var confirmAddLowercase;
  var confirmAddUppercase;
  var confirmAddNumbers;
  var confirmAddSymbols;

//When you click "Generated Password" = this prompt appears
  //Password Length
  var passwordLength = (prompt("How many characters do you want your password to contain? (between 7-128 characters)"));
    if (passwordLength <= 7 || passwordLength >= 128) {
      alert ("Password must be between 7 and 128 characters!!"); 
      return;
    }
    //Confirming password length
    alert ("Your password will be " + passwordLength + " characters");


//Confirming arrays: Variables
confirmAddLowercase = confirm("If you would like to include lowercase characters? = click OKAY");
confirmAddUppercase = confirm("If you would like to include uppercase characters? = click OKAY");
confirmAddSymbols = confirm("If you would like to include symbol characters? = click OKAY");
confirmAddNumbers = confirm("If you would like to include numbers? = click OKAY");

//Alerting user to use 'click' okay 
if (!confirmAddLowercase && !confirmAddUppercase && !confirmAddNumbers && !confirmAddSymbols) {
  alert (" Password must contain at least ONE!")
}

//Adding confirmed characteristics to password
var passwordParameter = [ ];

if (confirmAddLowercase) {
  passwordParameter = passwordParameter.concat(addLowercase);
}
if (confirmAddUppercase) {
  passwordParameter = passwordParameter.concat(addUppercase);
}
if (confirmAddSymbols) {
  passwordParameter = passwordParameter.concat(addSymbols);
}
if (confirmAddNumbers) {
  passwordParameter = passwordParameter.concat(addNumbers);
}

//WORK IN PROGRESS: Trying to confirm to user what characteristics they choose
//var lowerCaseResponse = ("lowercase");
//var upperCaseResponse = ("uppercase");
//var symbolsResponse = ("symbols");
//var numbersResponse = ("numbers");

//if (confirmAddNumbers || confirmAddUppercase || confirmAddSymbols || confirmAddNumbers) {
//  alert("password will include" [+ lowerCaseResponse + upperCaseResponse +symbolsResponse + numbersResponse]);
//}


var randomPassword = " ";

for (var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + passwordParameter[Math.floor(Math.random() * passwordParameter.length)];
  console.log(randomPassword);
}

  return randomPassword;
}