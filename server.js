// server.js

// set up ========================
var express = require('express');
var app = express();
var morgan = require('morgan'); 			// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(express.static(__dirname)); 				// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json


app.use(methodOverride());
app.use(bodyParser.json()); 									// parse application/json

var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

// application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendFile('index.html', options); // load the single view file (angular will handle the page changes on the front-end)
});


// listen (start app with node server.js) ======================================
app.listen(12345);
console.log("App listening on port 8080");