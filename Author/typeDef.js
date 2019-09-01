const { gql } = require("apollo-server");

const typeDef = gql`
type Author
{
    name: String
    books: [Book]
}
extend type Query 
{
    authors: [Author]
    author (id:Int): Author
}
`;

module.exports = {
  typeDef
};