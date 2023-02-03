import http from 'node:http';
const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const buffers = []
  
  for await (const chunck of req){
    buffers.push(chunck)
  }

  let body = []
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null 
  }
  console.log(body.name)

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }
  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;
    users.push({
      id: 1,
      name: name,
      email: email,
    })

    return res.end('Criação de usuário')
  }

  return res.end('Ok')
})

server.listen(3333)
