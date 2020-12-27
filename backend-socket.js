
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
    //allowedHeaders: ["my-custom-header"],
    credentials: true
}
});
var cors = require('cors');



io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('message', (msg) => {
	console.log(msg);
	socket.emit('message-broadcast', msg);
	socket.broadcast.emit('message-broadcast', msg);
});
});



app.get('/', (req, res) => res.send('hello!'));
http.listen(3000, () => {
	console.log('listening on *:3000');
});