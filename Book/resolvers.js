
const { Book } = require("./Book");
const { Author } = require("../Author/Author")

const resolvers = {
  Query: {
    books() 
    {
        return Book.all();
    },

    book (parent, args, context, infoZxc)
    {
        return Book.getBookById(args.id);
    },
  },
  Book: 
  {
      author(parent, args, context, infoZxc) {
          return Author.getAuthorById(parent.authorId)
      },
  },
};

module.exports = {
  resolvers,
}