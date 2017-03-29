var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Define statics routes to resources in node_modules
app.use('/static', express.static('node_modules/'));

//define where is html files
app.use(express.static('client'));

//show a message when user is in main route
/*app.get('/', function(req, res){
	res.status(200).send('Hola desde una ruta');
});*/


var messages = [{
	id: 1,
	text: "Welcome to our chat. ",
	nickname: "Bot - HenryLeon.com.ve"
}]; 

//Define the socket
io.on('connection', function(socket){
	console.log("Un nuevo usuario se ha conectado a nuestro socket"+ socket.handshake.address);
	socket.emit('messages', messages);

	socket.on('add-msg', function(data){
		messages.push(data);

		io.sockets.emit('messages', messages);
	});
});

server.listen('8000', function(){
	console.log('El servidor esta funcionando en localhost:8000');
});
