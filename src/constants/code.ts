enum Code {
  success = 3000,
  denied,
  error,
  timeout,
  unfound,
  expired,
  conflict,
}

type codeType = keyof typeof Code

export { Code, codeType }
