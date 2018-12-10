const fetchData = async () =>
    
    // local testing
    //await (await fetch('http://localhost:9000/test')).json();

    // deployed testing
    await (await fetch('/.netlify/functions/test')).json();

    

fetchData().then(data => {
    console.log(data);

    // use data, e.g. do things like 
    // loop through data
    // add DOM elements 
    // etc. etc.

});