import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import crypto from 'node:crypto'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const transactions = await knex('transactions').select('*')

    return {
      transactions,
    }
  })

  app.get('/:id', async (request) => {
    const getTransactionsParamsSchema = z.object({
      id: z.string(),
    })
    const { id } = getTransactionsParamsSchema.parse(request.params)
    const transaction = await knex('transactions').where({ id }).first()

    return {
      transaction,
    }
  })

  app.get('/summary', async () => {
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    return {
      summary,
    }
  })

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return reply.status(201).send()
  })
}
