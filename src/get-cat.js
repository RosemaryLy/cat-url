'use strict';
let axios = require('axios');

console.log(axios);
function getCat(){
    return axios.get('https://aws.random.cat/meow')

}

module.export= getCat;