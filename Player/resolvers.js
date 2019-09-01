
const { Player } = require("./Player");
const { Game } = require("../Game/Game")

const resolvers = {
  Query: {
    players() 
    {
        return Player.all();
    },

    player (parent, args, context, infoZxc)
    {
        return Player.getPlayerById(args.id);
    },
  },
  Player: 
  {
      games(parent, args, context, infoZxc) {
          return Game.getGamesForPlayer(parent.id)
      },
  },
};

module.exports = {
  resolvers,
}