const { players } = require("./data");
const { find, filter } = require('lodash');

class Player {
  static all() {
    return players;
  }

  static getPlayerById(playerId)
  {
    return find(players, {id : playerId})
  }

  static getPlayesrById(playerIdArray)
  {
    return filter(players, function(p)
    {
      return playerIdArray.includes(p.id);
    })
  }
}

module.exports = {
  Player,
};