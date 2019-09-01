const { books } = require("./data");
const { find, filter } = require('lodash');


class Book {
  static all() {
    return books;
  }

  static getBookById(bookId)
  {
    return find(books, {id : bookId})
  }

  static getBooksByAuthorId(authorId)
  {
    return filter(books, {authorId : authorId})
  }
}

module.exports = {
  Book,
};