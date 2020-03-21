# homework-2

Homework 2 for the UW Coding Bootcamp tasks me to write JavaScript code to generate a password when given user criteria for a strong, secure password. The password must be between 8 and 128 characters long, and at least one type of character from each of the user's chosen criterion must be present in the final password.

The toughest parts of this assignment were formulating a check for whether each type of character the user wants in the password has been used, checking the variable type for the "prompt" function because of the function's tendency to accept all values as Strings, and deciding whether to use one long concatenated String or an Object to make my code more accessible.