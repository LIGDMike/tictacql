const { players } = require("./data");
const { find, filter } = require('lodash');

var AWS = require("aws-sdk");
AWS.config.loadFromPath("awsCredentials.json")
var docClient = new AWS.DynamoDB.DocumentClient();

class Player {

  // On Dynamo
  static all() {
    var params = {
        TableName: "Players",
    };
    
    return docClient.scan(params)
    .promise()
    .then(
      function(req) 
      {
        return req["Items"];
      },
      function(error)
      {
        console.log(error)
        return [];
      });
  }

  // On Dynamo
  static getPlayerById(playerId)
  {
    var params = {
      TableName: "Players",
      Key:{
        "id": playerId
      }
  };
  
  return docClient.get(params)
  .promise()
  .then(
    function(req) 
    {
      return req["Item"];
    },
    function(error)
    {
      console.log(error)
      return [];
    });
  }

  // TODO Convert to Dynamo
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