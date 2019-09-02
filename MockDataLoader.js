var AWS = require("aws-sdk");

AWS.config.loadFromPath("awsCredentials.json")
var docClient = new AWS.DynamoDB.DocumentClient();
var ddb = new AWS.DynamoDB();

console.log("Creating Players table")
var params = {
    TableName: 'Players',
    KeySchema: [ 
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'N',
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1, 
    }
};

ddb.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Table Created", data);
    }
});


console.log("Filling Players table")

var params = {
    TableName: 'Players',
    Item: {
        id: 1,
        name: 'Mike',
    }
};
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});

var params = {
    TableName: 'Players',
    Item: {
        id: 2,
        name: 'Paul',
    }
};
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});


console.log("Creating Games table")

var params = {
    TableName: 'Games',
    KeySchema: [ 
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'N',
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1, 
    }
};

ddb.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Table Created", data);
    }
});


console.log("Filling Games table")

var params = {
    TableName: 'Games',
    Item: {
        id: 100,
        board: 'xo-x--xo',
        players: [1,2]
    }
};
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});

var params = {
    TableName: 'Games',
    Item: {
        id: 200,
        board: '---------',
        players: [1]
    }
};
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});


console.log("Listing Tables")
ddb.listTables({Limit: 10}, function(err, data) {
    if (err) {
      console.log("Error", err.code);
    } else {
      console.log("Table names are ", data.TableNames);
    }
  });