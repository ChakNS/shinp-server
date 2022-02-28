import express from 'express'
import routes from './routes'
import { logger } from './utils'
import config from 'config'
import initMiddleware from './middleware'

const app = express()

initMiddleware(app)

const PORT = config.get<number>('port')

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  routes(app)
})
