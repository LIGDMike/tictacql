const { gql } = require("apollo-server");

const typeDef = gql`
type Player
{
    name: String
    games: [Game]
}
extend type Query 
{
    players: [Player]
    player (id:Int): Player
}
`;

module.exports = {
  typeDef
};