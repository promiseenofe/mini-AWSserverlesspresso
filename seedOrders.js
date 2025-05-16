const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const orders = [
  { orderId: "order1", coffee: "Espresso", status: "Pending" },
  { orderId: "order2", coffee: "Latte", status: "Completed" }
];

exports.handler = async () => {
  for (const order of orders) {
    await ddb.put({ TableName: "MiniOrdersTable", Item: order }).promise();
  }
  return { status: "Seeded orders" };
};
