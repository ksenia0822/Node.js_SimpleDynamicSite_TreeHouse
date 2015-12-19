var router = require("./router.js");

var http = require('http');

http.createServer(function (request, response) {
  router.homeRoute(request, response);
  router.userRoute(request, response);
}).listen(8124, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8124/');
