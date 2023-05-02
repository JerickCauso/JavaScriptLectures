// STEP 1
const library = [
  {
    title: "title 1",
    author: "author 1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "title 2",
    author: "author 2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "title 3",
    author: "author 3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// STEP 2. Set the read property of all books to true using dot notation

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// STEP 3. Destructure the title property from the first book object and rename the variable to firstBook
const [{ title: firstBook }] = library;

// Log the value of firstBook to the console
console.log(firstBook);

// STEP 4. Convert the library array into a JSON string
const libraryJSON = JSON.stringify(library);

// Log the JSON string to the console
console.log(libraryJSON);
