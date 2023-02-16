import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
