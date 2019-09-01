const { gql } = require("apollo-server");

const typeDef = gql`
type Book 
{
    id: Int
    title: String
    published: Int
    author: Author
},
extend type Query 
{
    books: [Book]
    book (id:Int): Book
}
`;

module.exports = {
  typeDef
};