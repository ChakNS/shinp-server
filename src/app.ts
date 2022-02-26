import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

const POST = 1337

app.listen(POST, async () => {
  console.log(`App is running at http://localhost:${POST}`)
  routes(app)
})
