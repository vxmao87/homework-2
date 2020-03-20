// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  specialChar += "\"";
  var finalPassword;
  var charSet = "";
  var numberOfChars = parseInt(prompt("How many characters would you like your password to have? Choose a number between 8 and 128, please!"));
  if (typeof numberOfChars == "number" && numberOfChars >= 8 && numberOfChars <= 128) {
    var wantsCapital = confirm("Would you like your password to have capital letters?");
    if (wantsCapital) {
      charSet += capital;
    }
    var wantsLowercase = confirm("Would you like your password to have lowercase letters?");
    if (wantsLowercase) {
      charSet += lowercase;
    }
    var wantsNumbers = confirm("Would you like your password to have numbers?");
    if (wantsNumbers) {
      charSet += numbers;
    }
    var wantsSpecial = confirm("Would you like your password to have special characters?");
    if (wantsSpecial) {
      charSet += specialChar;
    }
  } else {
    alert("Please type a valid number!");
  }
  console.log(charSet);
  
  return "sometext";
}

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
