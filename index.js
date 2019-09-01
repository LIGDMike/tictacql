const { ApolloServer, gql } = require("apollo-server");
const books = require("./Book");
const authors = require("./Author");
const players = require("./Player");
const games = require("./Game");

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, books.typeDef, authors.typeDef, players.typeDef, games.typeDef],
  resolvers: [books.resolvers, authors.resolvers, players.resolvers, games.resolvers],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});