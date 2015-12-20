//Problem: We need a simple way to look at users badge counts and JS points from web browser
//Solution: Use node.js to perform the profile lookups and serve our templates via http
var router = require('./router.js');

//Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
