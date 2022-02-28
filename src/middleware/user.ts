import { Request, Response, NextFunction } from 'express'

const user = (req: Request, res: Response, next: NextFunction) => {
  res.locals.user = {}

  return next()
}

export default user
