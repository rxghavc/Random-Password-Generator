// Get the password input box element by its ID
const passwordBox = document.getElementById('password');
// Set the length of the password to be generated
const length = 20;
// Define the characters that can be used in the password
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

// Function to generate a random password
function generatePassword() {
    let password = "";
    // Loop to generate each character of the password
    for (let i = 0; i < length; i++) {
        // Get a random index from the charset
        let randomIndex = Math.floor(Math.random() * charset.length);
        // Append the character at the random index to the password
        password += charset[randomIndex];
    }
    // Set the value of the password input box to the generated password
    passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    // Select the text in the password input box
    passwordBox.select();
    // Execute the copy command
    document.execCommand('copy');
    // Alert the user that the password has been copied
    alert('Password copied to clipboard!');
}