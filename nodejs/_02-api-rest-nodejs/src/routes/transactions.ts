import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { knex } from "../database";
import { randomUUID } from "crypto";

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTransactionsBodySchema = z.object({
      title: z.string(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, type } = createTransactionsBodySchema.parse(
      request.body,
    )

    await knex('transactions')
      .insert({
        id: randomUUID(),
        title,
      })

    return reply.status(201).send()
  })
}