import { Request, Response, NextFunction } from 'express'

const responseHeader = (req: Request, res: Response, next: NextFunction) => {
  const { origin, Origin, referer, Referer } = req.headers
  const allowOrigin = origin || Origin || referer || Referer || '*'

  res.header('Access-Control-Allow-Origin', allowOrigin)
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Expose-Headers', 'Content-Disposition')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')

  if (req.method == 'OPTIONS') {
    res.sendStatus(204)
  } else {
    next()
  }
}

export default responseHeader
