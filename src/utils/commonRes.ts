import { Response } from 'express'
import { Code, codeType } from '../constants/code'

interface ResOption {
  type?: codeType
  status?: number
  message?: string
}

function commonRes(res: Response, data: unknown, options?: ResOption) {
  options = Object.assign({ type: Code[3000] }, options || {})

  const { type, status, message } = options
  let resStatus = status

  if (resStatus === undefined) {
    resStatus = type === Code[3000] ? 200 : 409
  }

  const sendRes: { code: number; data: unknown; message?: string } = {
    code: Code[type as codeType],
    data,
  }

  message && (sendRes.message = message)

  return res.status(resStatus).send(sendRes)
}

export default commonRes
