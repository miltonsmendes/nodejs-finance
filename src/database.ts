import { knex as setupKnex, Knex } from 'knex'
import 'dotenv/config'
import { env } from './env'

if (!process.env.NODE_ENV) {
  throw new Error('DATABASE_URL env not found')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
