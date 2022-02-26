import express from 'express'
import routes from './routes'
import logger from './utils/logger'
import config from 'config'

const app = express()

app.use(express.json())

const PORT = config.get<number>('port')

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  routes(app)
})
