// https://axios-http.com/docs/intro
// https://api.chucknorris.io/jokes/random

const axios = require('axios');

getData();

async function getData(){
    // const obj = {query: 'bla', page: 2};
    const response = await axios.get('https://api.chucknorris.io/jokes/random');//, obj);
    const joke = response.data;
    console.log(joke);
    console.log(joke.value);
}
