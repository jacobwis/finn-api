class Book {
  static search(keyword) {
    return keyword;
  }

  constructor(book) {
    this.id = book.id;
    this.title = book.title;
  }
}

module.exports = Book;
