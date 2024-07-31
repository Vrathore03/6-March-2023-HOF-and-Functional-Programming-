// Function to check if the input is a valid URL
const isValidURL = (url) => {
    // Regular expression to match a valid URL
    const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-_]+(\.[a-zA-Z]+)+$/;
    
    // Test the input URL against the regex pattern
    return urlPattern.test(url);
};

// Example inputs to test the function
const urls = [
    "http://example.com",
    "https://www.example-site.com",
    "ftp://example.com",      // Invalid because it doesn't start with http:// or https://
    "https://example",        // Invalid because it doesn't have a valid top-level domain
    "https://example.123",    // Invalid because top-level domain should be alphabetic
    "https://example.com/path", // Valid (but path after domain not checked in this case)
    "https://www.google.com"
];

// Check each URL and print if it's valid or not
urls.forEach(url => {
    if (isValidURL(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
});
