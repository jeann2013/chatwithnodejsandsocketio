var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
	res.status(200).send('Hola desde una ruta');
});

server.listen('8000', function(){
	console.log('El servidor esta funcionando en localhost:8000');
});
