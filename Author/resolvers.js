
const { Author } = require("./Author");
const { Book } = require("../Book/Book")

const resolvers = {
  Query: {
    authors() 
    {
        return Author.all();
    },

    author (parent, args, context, infoZxc)
    {
        return Author.getAuthorById(args.id);
    },
  },
  Author: 
  {
      books(parent, args, context, infoZxc) {
          return Book.getBooksByAuthorId(parent.id)
      },
  },
};

module.exports = {
  resolvers,
}