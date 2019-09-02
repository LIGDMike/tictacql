const { games } = require("./data");
const { find, filter } = require('lodash');

class Game {
  
  // TODO Convert to Dynamo
  static all() {
    return games;
  }

  // TODO Convert to Dynamo
  static getGameById(gameId)
  {
    return find(games, {id : gameId})
  }

  // TODO Convert to Dynamo
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