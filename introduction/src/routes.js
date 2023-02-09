import { randomUUID } from 'node:crypto';
import { buildRoutePath } from '../utils/build-route-path.js';
import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handle: (req, res) => {
      const users = database.select('users');

      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handle: (req, res) => {
      const user = {
        id: randomUUID(),
        name: "user",
        email: "use@use.com"
      }

      database.insert('users', user)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handle: (req, res) => {
      const { id } = req.params;
      return res.writeHead(201).end()
    }
  },
]