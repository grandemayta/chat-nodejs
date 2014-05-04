var io = require("socket.io").listen(6969);

io.sockets.on("connection", function(newUser){

	newUser.on("newUser", function(data){
		io.sockets.emit("userDataFromServer", data);
	});
});

io.sockets.on("connection", function(newUserMessage){

	newUserMessage.on("newUserMessage", function(data){
		io.sockets.emit("userMessageFromServer", data);
	});
});
