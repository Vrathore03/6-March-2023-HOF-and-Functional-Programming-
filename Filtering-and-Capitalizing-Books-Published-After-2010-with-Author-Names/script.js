// List of books with their authors and publication years
const books = [
    { title: "Book One", author: "john doe", year: 2008 },
    { title: "Book Two", author: "jane smith", year: 2012 },
    { title: "Book Three", author: "alice johnson", year: 2015 },
    { title: "Book Four", author: "bob brown", year: 2009 }
];

// Function to capitalize author names
const capitalizeAuthorName = (name) => {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
};

// Function to filter and process the list of books
const filterAndCapitalizeBooks = (books) => {
    return books
        .filter(book => book.year >= 2010) // Filter books published after 2009
        .map(book => ({
            ...book,
            author: capitalizeAuthorName(book.author)
        }));
};

// Process the books list
const filteredBooks = filterAndCapitalizeBooks(books);

// Output the new array with filtered and processed books
console.log(filteredBooks);
