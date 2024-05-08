// Library.js
class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    displayBooks() {
      this.books.forEach(book => {
        console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()}) - Available: ${book.isAvailable()}`);
      });
    }
  
    searchBooks(keyword) {
      return this.books.filter(book => book.getTitle().includes(keyword) || book.getAuthor().includes(keyword));
    }
  }
  
  module.exports = { Library };
  