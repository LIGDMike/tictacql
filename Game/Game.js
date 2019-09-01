const { games } = require("./data");
const { find, filter } = require('lodash');

class Game {
  static all() {
    return games;
  }

  static getGameById(gameId)
  {
    return find(games, {id : gameId})
  }

  static getGamesForPlayer(playerId)
  {
    return filter(games, function(g)
    {
      return g.players.includes(playerId);
    })
  }
}

module.exports = {
  Game,
};