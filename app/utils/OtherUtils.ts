const asyncWait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export { asyncWait };