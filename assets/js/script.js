// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  function generatePassword() {
    // prompts user for password length and converts it to an integer
    const lengthPrompt = parseInt(
      prompt("Enter a length for desired password (8-128)")
    );
    // checks if length meets requirements
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      // continues process if requirements met
      return randomSet(lengthPrompt);
    // stops process if they aren't
    } else {
      return alert("You must enter a value between 8 and 128");
    }
    // function to determine the character set desired and generating a random string using those characters
    // our length we just determined is brought along for the end
    function randomSet(len) {
      // starts with an empty string that is added to by .concat when the user affirms the character set to be used.
      let myPassword = "";
      let chars = "";
      if (confirm("Include lowercase letters?")) {
        chars = chars.concat("abcdefghijklmnopqrstuvwxyz");
      }
      if (confirm("Include Uppercase letters?")) {
        chars = chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if (confirm("Include Numbers?")) {
        chars = chars.concat("0123456789");
      }
      if (confirm("Include Special Characters?")) {
        chars = chars.concat(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
      }
      // for loop of the length the user entered that picks a random character from the composite string we ended up with.
      for (let i = 0; i < len; i++)
        myPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      return myPassword;
    }
  }
  // check that the password received from our functions isn't still the empty string or such
  if (password) {
    // displays the generated password if there is one
    passwordText.value = password;
  // kicks the user back to the start if they hit no to everything or something went wrong
  } else {
    return alert("You must choose at least one set of characters");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
