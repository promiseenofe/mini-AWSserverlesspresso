exports.handler = async (event) => {
    if (!event.request.session || event.request.session.length === 0) {
        event.response.challengeName = 'CUSTOM_CHALLENGE';
        event.response.issueTokens = false;
        event.response.failAuthentication = false;
    } else if (event.request.session.slice(-1)[0].challengeResult === true) {
        event.response.issueTokens = true;
        event.response.failAuthentication = false;
    } else {
        event.response.issueTokens = false;
        event.response.failAuthentication = true;
    }
    return event;
};