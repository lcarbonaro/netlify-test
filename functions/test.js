exports.handler = function (event, context, callback) {

    const {payload} = JSON.parse(event.body);

    const { SOME_API_KEY } = process.env;

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
            "fld1": "Just Testing",
            "fld2": 123456,
            "isOK" : true,
            "processEnvVar" : SOME_API_KEY,
            "posted": payload
        };
        send(data);
    }

    // can restrict HTTP method here
    //if (event.httpMethod === 'GET') {        
        test();
    //}

} // exports.handler