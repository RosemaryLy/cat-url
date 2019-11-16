'use strict';

let double = require('./double'); 
console.log(double(4));
console.log(double);

let getCat = require ('/get-cat.js');
console.log(getCat);
getCat().then(afterGetCat);