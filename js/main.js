const fetchData = async () =>
    await (await fetch('http://localhost:9000/test')).json();

fetchData().then(data => {
    console.log(data);

    // use data, e.g. do things like 
    // loop through data
    // add DOM elements 
    // etc. etc.

});