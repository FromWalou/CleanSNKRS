// Import
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

// instance server
var server = express();

// Configuration BodyParser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Routes
server.get('/', function (req, res) {
    res.status(200)
    .send('<h1>Bonjour mon super serveur</h1>');
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  
  next();
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
	console.log('server en écoute');
});
