
// DEFINING MODULES...

var express = require('express');

var app = express();

var http = require('http');

var server = require('http').createServer(app);

var io = require('socket.io')(server, {});

var util = require("util");


server.listen(3000,"192.168.91.2");
console.log('Server\'s Running');

app.get('/', function(req, res){
		res.sendFile(__dirname + '/MTypingGame.html');
});


//Port listening...
//it means every time a client is connected he's gonna get into this....

io.sockets.on('connection', function(socket){
			
			console.log("A client is connected");
			
});







