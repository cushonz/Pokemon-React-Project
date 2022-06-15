const axios = require('axios');
const cheerio = require('cheerio');
const Pokemon = require('./pokemon');

const URI = 'https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon';
    axios.get(URI).then((response) => {
    const $ = cheerio.load(response.data);
    let pokemon = $('td').text().split('\n');
    let mon;
    let dex,name,type1,type2;
    for (let i = 29; i < 5182;){
    	dex = pokemon[i];
    	name = pokemon[i+2];
    	type1 = pokemon[i+3];
    	type2 = pokemon[i+4];
    	i+=6;
        mon = new Pokemon(name,type1,type2,dex);
        console.log(JSON.stringify(mon)+",");
    }
    	
    })
