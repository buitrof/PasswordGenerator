// Assignment Code
let generateBtn = document.querySelector("#generate");

document.getElementById('generate').addEventListener('click', function () {
  let passLength = prompt('How long do you want your password to be? (8-128 characters')
  let passChar = prompt('What characters do you want in your password? (u for uppercase, l for lowercase, n for numeric, s for special characters)')
  function generatePassword() {
    let length = passLength,
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
      retVal = "";
    for (let i = 0, n = charset; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random) * n);
    }
    return retVal;
  }
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  generateBtn.addEventListener("click", writePassword());
})

// Write password to the #password input

// Add event listener to generate button
