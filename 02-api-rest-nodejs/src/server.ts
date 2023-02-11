import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const get = await knex('sqlite_schema').select('*')
  console.log(get)
  return 'OK'
})

app.listen({ port: 3333 }).then(() => {
  console.log(`HTTP Server in port ${3333}`)
})
