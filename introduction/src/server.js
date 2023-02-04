import http from 'node:http';
import { json } from './middlewares/json.js';
const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

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
  console.log(body)

  if (method === 'GET' && url === '/users') {
    return res
      .end(JSON.stringify(users))
  }
  if (method === 'POST' && url === '/users') {
    const n = body;

    console.log(body)

    return res.end('Criação de usuário')
  }

  return res.end('Ok')
})

server.listen(3333)
