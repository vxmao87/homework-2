// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

  // Initiates criteria for passwords including capital & lowercase letters, numbers and special characters
  // Sets up the character sets being used and the final password
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // Quotation marks need to be added into the "specialChar" String separately
  // because of the presence of three quotation marks in one String
  specialChar += "\"";
  var charSet = [];
  var finalPassword = "";

  // Prompt the user for the criteria needed to formulate password
  // If the user says yes, then the character set is placed inside the
  // "charSet" array, and guarantees that it will be used at least once,
  // hence the "uses: 1" tag
  var numberOfChars = parseInt(prompt("How many characters would you like your password to have? Choose a number between 8 and 128, please!"));
  if (typeof numberOfChars == "number" && numberOfChars >= 8 && numberOfChars <= 128) {
    var wantsCapital = confirm("Would you like your password to have capital letters?");
    if (wantsCapital) {
      charSet.push({text: capital, uses: 1});
    }
    var wantsLowercase = confirm("Would you like your password to have lowercase letters?");
    if (wantsLowercase) {
      charSet.push({text: lowercase, uses: 1});
    }
    var wantsNumbers = confirm("Would you like your password to have numbers?");
    if (wantsNumbers) {
      charSet.push({text: numbers, uses: 1});
    }
    var wantsSpecial = confirm("Would you like your password to have special characters?");
    if (wantsSpecial) {
      charSet.push({text: specialChar, uses: 1});
    }

    // Sets a condition as to whether all conditions have been used
    var allConditionsMet = false;
    
    // Checks whether the user has said yes to any of the criteria - if not, throws an exception 
    if (charSet.length > 0) {
      // The number of uses for all characters should total up to the number that the user
      // typed up - this loop will account for the rest of the password length by randomly
      // assigning them to whichever criteria the user wants in the password
      for (var times = 1; times <= numberOfChars - charSet.length; times++) {
        var num = Math.floor(Math.random() * charSet.length);
        charSet[num].uses++;
      }
      
      while (allConditionsMet == false) {
        var charLine = charSet[Math.floor(Math.random() * charSet.length)];
        // If there are still uses for the given character, use a random character off the 
        // attached set of characters, and decrease the use of that character by one
        if (charLine.uses != 0) {
          var newChar = charLine.text.charAt(Math.floor(Math.random() * charLine.text.length));
          finalPassword += newChar;
          charLine.uses--;
        }

        // Check to see whether all characters have been used given the criteria the user
        // needs for the password, a.k.a. when the number of uses for each given criteria
        // is zero
        var conditions = [];
        var cases = 0;
        for (var i = 0; i < charSet.length; i++) {
          conditions.push(false);
          if(charSet[i].uses == 0) {
            conditions[i] = true;
            cases++;
          }
        }
        if (cases == conditions.length) {
          allConditionsMet = true;
        }
      }

    } else {
      throw alert("Unable to generate password, please select at least one condition!");
    }
  } else {
    throw alert("Please type a valid number!");
  }


  console.log(charSet);
  
  return finalPassword;
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
