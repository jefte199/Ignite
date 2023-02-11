import fastify from 'fastify';

const app = fastify();

app.get('/', () => {
  return 'hellow word'
})

app.listen({ port: 3333, })
  .then(() => {
    console.log(`HTTP Server in port ${3333}`)
  })
