function homeRoute(request,response) {
	if(request.url === "/") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write("Search\n");
		response.write("Footer\n");
	}
}

function userRoute(request, response) {
	var username = request.url.replace("/", "");
	if (username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write(username + "\n");
		response.write("Footer\n");
	}
}

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;