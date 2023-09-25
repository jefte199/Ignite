import  fastify from 'fastify';
import { knex } from './database';

const app = fastify()

app.get('/', async () => {
  const sq = knex('sqlite_schema').select('*')

  return sq
});

app.listen({
  port: 3333.
}).then(() => {
  console.log("HTTP Server Running")
})