const express = require("express"),
    app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server)
var visual = {
  print: function print(text) {
    app.get('/', function(req, res) {
        res.end(text);
    })
  },
  port: port = 1000,
  listen: function listen(port) {
    server.listen(port);
  }
}
visual.port = 8070;
visual.print("Hello!");
visual.listen(visual.port);
