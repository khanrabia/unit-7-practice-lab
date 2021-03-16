let http = require("http");
let hostName = "127.0.0.1";
let port = 8000;

const server = http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'HTML' });
	response.end('<h1>Finally, I did it!</h1>');
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${hostName}:${port}/`);
});