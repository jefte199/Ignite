import fs from 'node:fs/promises'

const dataPath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor(){
    fs.readFile(dataPath, 'utf8').then(data => {
      this.#database =JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist(){
    fs.writeFile(dataPath, JSON.stringify(this.#database))
  }

  select(table) {
    const data = this.#database[table] ?? []

    return data
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist();
    
    return data
  }
}