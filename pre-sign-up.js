exports.handler = async (event) => {
    console.log("PreSignUp event:", event);

    if(event.request.userAttributes.email && event.request.userAttributes.email.endsWith("@example.com")) {
        event.response.autoConfirmUser = true;
    } else {
        event.response.autoConfirmUser = false;
    }
    return event;
};