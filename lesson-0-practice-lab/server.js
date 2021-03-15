let http = require('http');
let hostName = '127.0.0.1';
let port = 8000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.writeHead('Content-Type', 'text/plain');
	res.end('Hello World!');
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${hostName}:${port}/`);
});