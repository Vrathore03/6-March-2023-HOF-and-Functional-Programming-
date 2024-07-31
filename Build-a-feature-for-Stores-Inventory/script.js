// Original list of items and their prices in USD
const itemsInUSD = {
    apple: 1,
    banana: 0.5,
    orange: 0.75,
    mango: 1.5
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices to itemINR
const convertPricesToINR = (items, rate) => {
    // Get the entries of the object as an array of [key, value] pairs
    const entries = Object.entries(items);

    // Use map to create a new array with converted prices
    const convertedEntries = entries.map(([item, price]) => [, price * rate]);

    // Convert the array of [key, value] pairs back to an object
    return Object.fromEntries(convertedEntries);
};

// Convert the prices
const itemsInINR = convertPricesToINR(itemsInUSD, exchangeRate);

// Output the new object with prices in INR
console.log(itemsInINR);
