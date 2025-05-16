const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.ORDERS_TABLE;

exports.handler = async (event) => {
    const params = { TableName: tableName };
    const data = await ddb.scan(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(data.Items),
    };
};
