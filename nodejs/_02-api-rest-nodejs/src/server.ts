import  fastify from 'fastify';

const app = fastify()

app.get('/', () => {
  return 'welcomew'
});

app.listen({
  port: 3333.
}).then(() => {
  console.log("HTTP Server Running")
})