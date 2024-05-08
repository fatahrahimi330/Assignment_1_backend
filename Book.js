// Book.js
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.available = true;
    }
  
    getTitle() {
      return this.title;
    }
  
    getAuthor() {
      return this.author;
    }
  
    getYear() {
      return this.year;
    }
  
    isAvailable() {
      return this.available;
    }
  
    rentBook() {
      if (this.available) {
        this.available = false;
        return true;
      } else {
        return false;
      }
    }
  
    returnBook() {
      this.available = true;
    }
  }
  
  module.exports = { Book };
  