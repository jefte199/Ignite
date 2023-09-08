import http from 'node:http';

const server = http.createServer((request, response) => {
	const { method, url } = request;

	return response.end("Welcome api");
})

const PORT = 3333;
server.listen(PORT);
