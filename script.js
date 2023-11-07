// Assignment code here


function generatePassword() {
  var length = 8,
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210!@#$%^&*().,/`~",
    value = "";
  for (var i = 0, n = characters.length; i < length; ++i) {
    value += characters.charAt(Math.floor(Math.random() * n));
  }
  return value;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userChoice1 = window.confirm("Needs to have at least 1 capital letter?")
  
  if (userChoice1) {
      var userChoice2 = window.confirm("Needs to have at least 1 symbol/special character?")
        if (userChoice2) { 
          var userChoice3 = window.confirm("Needs to have at least 1 number?")
      }
        else if (!userChoice2) {
          var userChoice3 = window.confirm("Needs to have at least 1 number?")
        }
          if (userChoice3) {
            var userChoice4 = window.prompt("Choose password length:")
          }
          else if (!userChoice3) {
            var userChoice4 = window.prompt("Choose password length:")
          }
            if (userChoice4) {
              var password = generatePassword();
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
            }
            else if (!userChoice4) {
              return;
            }
  }
  else if (!userChoice1) {
      var userChoice2 = window.confirm("Needs to have at least 1 symbol/special character?")
        if (userChoice2) {
          var userChoice3 = window.confirm("Needs to have at least 1 number?")
      }
        else if (!userChoice2) {
          var userChoice3 = window.confirm("CNeeds to have at least 1 number?")
          }
            if (userChoice3) {
              var userChoice4 = window.prompt("Choose password length:")
          }
          else if (!userChoice3) {
            var userChoice4 = window.prompt("Choose password length:")
          }
            if (userChoice4) {
              var password = generatePassword();
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
            }
            else if (!userChoice4) {
              return;
            }
  }
  function generatePassword() {
        if (userChoice1 && userChoice2 && userChoice3) {
          var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?/`~,."
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
            }
          return value;
        }
        else if (!userChoice1 && userChoice2 && userChoice3) {
          var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?/`~,."
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
        else if (userChoice1 && !userChoice2 && userChoice3) {
          var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
        else if (userChoice1 && userChoice2 && !userChoice3) {
          var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()<>?/`~,."
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
        else if (!userChoice1 && !userChoice2 && userChoice3) {
          var characters = "abcdefghijklmnopqrstuvwxyz0123456789"
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
        else if (!userChoice1 && userChoice2 && !userChoice3) {
          var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?/`~,."
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
        else if (userChoice1 && !userChoice2 && !userChoice3) {
          var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
        else if (!userChoice1 && !userChoice2 && !userChoice3) {
          var characters ="abcdefghijklmnopqrstuvwxyz"
          var length = userChoice4
          var value = "";
            for (var i = 0, n = characters.length; i < length; ++i) {
            value += characters.charAt(Math.floor(Math.random() * n));
          }
          return value;
        }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
