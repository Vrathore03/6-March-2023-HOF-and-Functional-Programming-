// Input string
let input = "Hello, World!";

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to print the reversed string after a delay
function printReversedString() {
    let reversedString = reverseString(input);
    console.log(reversedString);
}

// Set a timeout of 2 seconds (2000 milliseconds) to print the reversed string
setTimeout(printReversedString, 2000);
