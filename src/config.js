import { readFile, writeFile } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

const read = promisify(readFile)
const write = promisify(writeFile)

const PRIVATE_KEY = ''
const NETWORK = {
  name: 'wapnet',
  chainId: 7475
}
const RPC_URL = 'http://127.0.0.1:8545'
const POLLING_INTERVAL = 1000

export default async () => {
  const path = join(process.cwd(), 'config.json')
  let config
  try {
    config = await read(path)
    config = JSON.parse(config.toString())
  } catch (e) {
    config = {PRIVATE_KEY, NETWORK, RPC_URL, POLLING_INTERVAL}
    await write(path, JSON.stringify(config, null, 2))
  }
  return config
}
