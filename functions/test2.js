const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = function (event, context, callback) {

    const url = 'https://www.indeed.ca/jobs?q=pharmacist&l=Milton&radius=40';

    // get data from url
    // then send it
    const test = () => {
        axios.get(url)
            .then(async (res) => {
                //console.log('dot then');
                if (res.status === 200) {
                    const html = res.data;
                    const $ = cheerio.load(html);                    

                    $('div.result','td#resultsCol').each(await function (i, elem) {
                        let jt = $(this).find('a').text().trim();
                        //let jl = $(this).find('a').attr('href').trim();

                        console.log(`[${i + 1}]${jt}`);


                    });
                  
                    send({
                        "ok": "ok"
                    });
                }


            })
            .catch(err => send(err));
    }

    // send response
    // note data is passed in response body
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

    // can restrict HTTP method here
    //if (event.httpMethod === 'GET') {        
    test();
    //}

} // exports.handler