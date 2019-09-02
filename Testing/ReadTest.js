var AWS = require("aws-sdk");

console.log("here")

AWS.config.loadFromPath("awsCredentials.json")

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Players";

var id = 2;

var params = {
    TableName: table,
    Key:{
        "id": id
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data[], null, 2));
    }
});