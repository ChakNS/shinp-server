import { Express, Request, Response, Router } from 'express'
import commonRes from '../utils/commonRes'

interface RouterConf {
  path: string
  router: Router
  meta?: unknown
}

const routerConf: Array<RouterConf> = []

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) => commonRes(res, { word: 'Hello Shinp!!!' }))

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
