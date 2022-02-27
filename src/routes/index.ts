import { Express, Request, Response, Router } from 'express'
import commonRes from '../utils/commonRes'
import slientHandle from '../utils/silentHandle'

interface RouterConf {
  path: string
  router: Router
  meta?: unknown
}

const routerConf: Array<RouterConf> = []

const getInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('info...') : reject('error...')
    }, 500)
  })
}

function routes(app: Express) {
  app.get('/', async (req: Request, res: Response) => {
    const [e, result] = await slientHandle(getInfo)
    e ? commonRes.error(res, null) : commonRes(res, { result })
  })

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
