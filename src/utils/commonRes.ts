import { Response } from 'express'

const enum statusCode {
  success = 200,
  denied = 401,
  error = 409,
}

// 统一的请求响应数据格式
function commonRes(res: Response, data: unknown, options?: { code?: statusCode; status?: number }) {
  options = Object.assign({ code: statusCode['success'] }, options || {})
  const { code, status } = options
  let resStatus = status

  if (!resStatus) resStatus = code === statusCode['success'] ? statusCode['success'] : statusCode['error']

  return res.status(resStatus).send({ code, data })
}

export default commonRes
