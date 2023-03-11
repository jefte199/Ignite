import { expect, test, beforeAll, afterAll } from 'vitest'
import { app } from '../app'
import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('create transaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'new transaction',
    amount: 5000,
    type: 'credit',
  })

  expect(response.statusCode).toEqual(201)
})
