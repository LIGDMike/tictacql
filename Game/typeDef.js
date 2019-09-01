const { gql } = require("apollo-server");

const typeDef = gql`
type Game
{
    id: Int
    board: String
    players: [Player]
}
extend type Query 
{
    games: [Game]
    game (id:Int): Game
}
`;

module.exports = {
  typeDef
};