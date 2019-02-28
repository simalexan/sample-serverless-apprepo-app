const AWS = require('aws-sdk'),
    dynamoDb = new AWS.DynamoDB.DocumentClient(),
    processResponse = require('./process-response'),
    TABLE_NAME = 'products';

exports.handler = event => {
  if (event.httpMethod === 'OPTIONS') {
		return Promise.resolve(processResponse(true));
    }
    const requestedProductId = event.pathParameters.productId;
    if (!requestedProductId) {
        return Promise.resolve(processResponse(true, `Error: You missing the productId parameter`, 400));
    }

    const params = {
        TableName: TABLE_NAME,
        Key: {
          productId: requestedProductId
        }
    }
    return dynamoDb.get(params)
    .promise()
    .then(response => processResponse(true, response.Item))
    .catch(err => {
        console.log(err);
        return processResponse(true, 'dynamo-error', 500);
    });
};
