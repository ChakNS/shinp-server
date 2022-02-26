import { Express, Request, Response, Router } from 'express'

interface RouterConf {
  path: string
  router: Router
  meta?: unknown
}

const routerConf: Array<RouterConf> = []

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) =>
    res.status(200).send('Hello Shinp!!!')
  )

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
