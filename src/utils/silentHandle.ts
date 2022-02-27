async function silentHandle(fn: Function, ...args: any[]): Promise<any[]> {
  const result: any[] = [null, null]

  try {
    result[1] = await fn(...args)
  } catch (e) {
    result[0] = e
  }

  return result
}

export default silentHandle
