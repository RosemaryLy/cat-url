'use strict';

let express = require('express');
let getCat = require('./get-cat');

let app = express();
let port = 3000;

/**
 * Three "app.get`s are functionally the same
 */
// app.get('/', function (req, res) {
  // Code goes here
// });

// app.get('/', (req, res) => {
  // Code goes here
// });

function handleGetHome(request, response) {
  response.send('Hello, world!');
}
app.get('/', handleGetHome);

/**
 * GET /cat
 */
function handleGetCat(request, response) {
  // This runs when the route (HTTP method + URL path) is requested
  function handleCatResponse(catResponse) {
    response.send(catResponse.data);
  }
  getCat().then(handleCatResponse);
}
app.get('/cat', handleGetCat); // We define the route here

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);