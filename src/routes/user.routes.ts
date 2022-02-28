import { Router } from 'express'
import {
  createUserHandler,
  updateUserInfoHandler,
  getUserInfoHandler,
  getAllUserInfoHandler,
} from '../controller/user.controller'
import validate from '../middleware/validate'
import { createUserSchema, updateUserSchema, fetchUserSchema } from '../schema/user.schema'

const router = Router()

router.post('/create', validate(createUserSchema), createUserHandler)

router.post('/update', validate(updateUserSchema), updateUserInfoHandler)

router.post('/fetch', validate(fetchUserSchema), getUserInfoHandler)

router.post('/fetchAll', getAllUserInfoHandler)

export default router
