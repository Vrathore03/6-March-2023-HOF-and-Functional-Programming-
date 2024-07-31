// Set the delay in milliseconds (3000 ms = 3 seconds)
let delay = 3000;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Function to display the countdown and generate the random number
function countdownAndGenerateRandomNumber() {
    let timeRemaining = delay / 1000; // Convert milliseconds to seconds

    // Display a message every second indicating the time remaining
    let countdownInterval = setInterval(() => {
        console.log(`Time remaining: ${timeRemaining} seconds`);
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);

            // Generate and output the random number after the delay
            let randomNumber = generateRandomNumber();
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}

// Start the countdown and generate the random number after the delay
countdownAndGenerateRandomNumber();
