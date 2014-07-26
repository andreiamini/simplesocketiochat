var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = 3000;

app.get('/', function(req, res){
	res.sendfile("index.html");
});

app.get('/about', function(req, res){
	res.send("<h1>This is a simple test with node.js, express and socket.io</h1>");
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit("chat message", msg);
    console.log('message: ' + msg);
  });
});

http.listen(port, function(){
	console.log('Listening on port ' + port);
});