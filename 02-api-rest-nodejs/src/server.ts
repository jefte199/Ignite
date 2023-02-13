import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const transaction = await knex('transactions').select('*')
  /*
    .insert({
      id: crypto.randomUUID(),
      title: 'transação de teste',
      amount: 1000,
    })
    .returning('*')
*/
  return transaction
})

app.listen({ port: 3333 }).then(() => {
  console.log(`HTTP Server in port ${3333}`)
})
