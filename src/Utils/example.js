const axios = require('axios');
const cheerio = require('cheerio');
const pokemon = require('./pokemon');

const URI ='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    axios.get(URI).then((response) => {
    let name,type1,type2,dex;

    for (let i = 0; i < mons.length; i++){

    }
    })
