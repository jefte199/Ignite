import { expect, it, beforeAll, beforeEach, afterAll, describe } from 'vitest'
import { app } from '../app'
import { execSync } from 'node:child_process'
import request from 'supertest'

describe('Trajsactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it('create transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'new transaction',
      amount: 5000,
      type: 'credit',
    })
    expect(response.statusCode).toEqual(201)
    console.log(response.get('Set-Cookie'))
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'new transaction',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const res = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)

    expect(res.body.transactions).toEqual([
      expect.objectContaining({
        title: 'new transaction',
        amount: 5000,
      }),
    ])
  })
})
