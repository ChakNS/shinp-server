import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => res.sendStatus(200))

export default router
