exports.handler = function (event, context, callback) {

    //const {somePostedData} = JSON.parse(event.body);

    // send response
    // note data in passed on response body
    // note also headers 
    const send = data => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify(data)
        });
    }

    // do some API call to get data
    // then send it
    const test = () => {
        // API call would go here
        // e.g. axios
        let data = {
            "test": "just testing again",
            "test2": 123,
            "isOK" : true
            // , "posted": somePostedData
        };
        send(data);
    }

    // can restrict HTTP method here
    //if (event.httpMethod === 'GET') {        
        test();
    //}

} // exports.handler