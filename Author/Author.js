const { authors } = require("./data");
const { find, filter } = require('lodash');

class Author {
  static all() {
    return authors;
  }

  static getAuthorById(authorId)
  {
    return find(authors, {id : authorId})
  }
}

module.exports = {
  Author,
};