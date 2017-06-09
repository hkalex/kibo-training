exports.handler = (event, context, callback) => {
    var responseBody = {
        event,
        context
    }
    var responseCode = 200;
    var response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);

};

