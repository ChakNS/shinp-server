import { Express, Request, Response, Router } from 'express'

import User from './user.routes'

interface RouterConf {
  path: string
  router: Router
  meta?: unknown
}

const routerConf: Array<RouterConf> = [{ path: '/user', router: User }]

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) => res.sendStatus(200))

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
