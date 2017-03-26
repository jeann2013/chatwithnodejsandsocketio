var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen('8888', function(){
	console.log('El servidor esta funcionando en localhost:8888');
});
