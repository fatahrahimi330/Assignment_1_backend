// Main.js
const { Book } = require('./Book');
const { Library } = require('./Library');

class Main {
  static run() {
    // Example program
    const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
    const book3 = new Book("1984", "George Orwell", 1949);

    const library = new Library();

    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    console.log("Books in the library:");
    library.displayBooks();

    const searchResult = library.searchBooks("Mockingbird");
    console.log("\nSearch Result:");
    searchResult.forEach(result => {
      console.log(`${result.getTitle()} by ${result.getAuthor()} (${result.getYear()})`);
    });

    console.log("\nRenting a book:");
    if (book2.rentBook()) {
      console.log(`${book2.getTitle()} is rented.`);
    } else {
      console.log(`${book2.getTitle()} is not available for rent.`);
    }

    console.log("\nUpdated Book Status:");
    library.displayBooks();

    console.log("\nReturning a book:");
    book2.returnBook();

    console.log("\nUpdated Book Status:");
    library.displayBooks();
  }
}

Main.run();
