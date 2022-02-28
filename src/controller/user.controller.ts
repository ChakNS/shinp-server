import { Request, Response } from 'express'
import { commonRes, silentHandle } from '../utils'

import { CreateUserInput } from '../schema/user.schema'
import USER_CRUD from '../service/user.service'

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
  const [e, user] = await silentHandle(USER_CRUD.create.bind(USER_CRUD), req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}

export async function updateUserInfoHandler(req: Request, res: Response) {
  const [updateError] = await silentHandle(USER_CRUD.update, { _id: req.body.id }, req.body)
  const [fetchError, user] = await silentHandle(USER_CRUD.findOne, { _id: req.body.id }, { password: 0, deletedAt: 0 })

  const e = updateError || fetchError

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}

export async function getUserInfoHandler(req: Request, res: Response) {
  const [e, user] = await silentHandle(USER_CRUD.findOne, { _id: req.body.id }, { password: 0, deletedAt: 0 })

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}

export async function getAllUserInfoHandler(req: Request, res: Response) {
  const [e, users] = await silentHandle(USER_CRUD.find, {})

  return e ? commonRes.error(res, null, e.message) : commonRes(res, users)
}
