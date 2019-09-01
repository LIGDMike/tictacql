const { data } = require("./data");
const { Author } = require("./Author");
const { resolvers } = require("./resolvers");
const { typeDef } = require("./typeDef");

module.exports = {
  data,
  Author,
  resolvers,
  typeDef,
};