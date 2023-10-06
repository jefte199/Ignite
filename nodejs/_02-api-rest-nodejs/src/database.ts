import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './db/app.db'
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
