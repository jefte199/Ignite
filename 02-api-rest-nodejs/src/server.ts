import { env } from './env'
import { app } from './app'

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP Server in port ${3333}`)
})
