// Function to validate LinkedIn profile URLs
const isValidLinkedInURL = (url) => {
    // Regular expression to match a valid LinkedIn profile URL
    const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    
    // Test the input URL against the regex pattern
    return linkedInPattern.test(url);
};

// Example URLs to test the function
const urls = [
    "https://www.linkedin.com/in/johndoe",              // Valid
    "https://www.linkedin.com/in/jane_doe-123",         // Valid
    "https://linkedin.com/in/johndoe",                  // Invalid, missing 'www.'
    "https://www.linkedin.com/in/john",                 // Invalid, profile ID too short
    "https://www.linkedin.com/in/jane.doe",             // Invalid, contains a period
    "https://www.linkedin.com/in/very-long-profile-id-1234567890",  // Invalid, profile ID too long
    "https://www.linkedin.com/in/jane-doe!",            // Invalid, contains an exclamation mark
    "https://www.linkedin.com/in/john_doe_123-",         // Invalid, ends with a hyphen
    "https://www.linkedin.com/in/Vaibhav-Rathore-637"
];

// Check each URL and print if it's valid or not
urls.forEach(url => {
    if (isValidLinkedInURL(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
});
