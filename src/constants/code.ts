enum Code {
  success = 3000,
  denied,
  error,
}

enum CodeMessage {
  success = '请求成功',
  denied = '无权限',
  error = '系统异常',
}

type codeType = keyof typeof Code

export { Code, codeType, CodeMessage }
