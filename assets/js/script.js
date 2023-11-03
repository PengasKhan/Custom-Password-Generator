// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  function generatePassword() {
    const lengthPrompt = parseInt(
      prompt("Enter a length for desired password (8-128)")
    );
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      randomSet(lengthPrompt);
    } else {
      return alert("You must enter a value between 8 and 128");
    }
    function randomSet(len) {
      let myPassword = "";
      let chars = "";
      if (confirm("Include lowercase letters?")) {
        let newString = chars.concat("abcdefghijklmnopqrstuvwxyz");
        let chars = newString;
      }
      if (confirm("Include Uppercase letters?")) {
        let newString = chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        let chars = newString;
      }
      if (confirm("Include Numbers?")) {
        let newString = chars.concat("0123456789");
        let chars = newString;
      }
      if (confirm("Include Special Characters?")) {
        let newString = chars.concat(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
        let chars = newString;
      }
      for (let i = 0; i < len; i++)
        myPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      return myPassword;
    }
    return;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
