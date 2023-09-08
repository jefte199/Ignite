import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
	const { method, url } = request;

	if(method === 'GET' && url === '/users') {
		return response
		.setHeader('Content-type', 'application/json')
		.end(JSON.stringify(users))
	}

	if(method === 'POST' && url === '/user') {
		users.push({
			name: "Jefté",
			email: "Jefte@gmail",
		})
		return response.end("usuario criado")
	}

	return response.end("Welcome api");
})

const PORT = 3333;
server.listen(PORT);
