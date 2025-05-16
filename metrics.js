exports.handler = async () => {
    console.log("Metrics service: Health check OK");
    return { statusCode: 200, body: "Metrics OK" };
};
