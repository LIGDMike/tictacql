
const { Game } = require("./Game");
const { Player } = require("../Player/Player")

const resolvers = {
  Query: {
    games() 
    {
        return Game.all();
    },

    game (parent, args, context, infoZxc)
    {
        return Game.getGameById(args.id);
    },
  },
  Game: 
  {
      players(parent, args, context, infoZxc) {
          return Player.getPlayesrById(parent.players);
      },
  },
};

module.exports = {
  resolvers,
}