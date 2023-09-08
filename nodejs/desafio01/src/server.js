import http from 'node:http';

const tasks = [];

const server = http.createServer((request, response) => {
	const { method, url } = request;

	if(method === 'GET' && url === '/tasks') {
		return response
		.setHeader('Content-type', 'application/json')
		.end(JSON.stringify(tasks))
	}

	if(method === 'POST' && url === '/tasks') {
		tasks.push({
			name: "Jefté",
			email: "Jefte@gmail",
		})
		return response.end("usuario criado")
	}

	return response.end("Welcome api");
})

const PORT = 3333;
server.listen(PORT);
