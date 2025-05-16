exports.handler = async (event) => {
    console.log("Lambda extension logging event:", event);
    return event;
};
