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
                    let result = [];

                    $('div.result','td#resultsCol').each(await function (i, elem) {
                        let rec = {}
                        let jts = $(this).find('a'); 
                        let jt = $(jts[0]).text().trim();
                        let jl = 'https://www.indeed.ca' + $(jts[0]).attr('href').trim();

                        //console.log(`[${i + 1}]${jt}`);

                        rec.jobTitle = jt;
                        rec.jobLink = jl;
                        result.push(rec);

                    });
                  
                    send(result);
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