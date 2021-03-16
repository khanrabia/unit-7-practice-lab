let http = require("http");
let hostName = "127.0.0.1";
let port = 8000;

const server = http.createServer((request, response) => {
	response.writeHead(200);
	response.end('Finally, I did it!');
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${hostName}:${port}/`);
});