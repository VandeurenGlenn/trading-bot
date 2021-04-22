import {Contract} from 'ethers'

import addresses from './addresses'
import abis from './abis'

export default class Exchange {
  constructor(signer) {
    this._exchange = new Contract(addresses.exchange, abis.exchange, signer)
  }

  get contract() {
    return this._exchange
  }

  async ethToToken(value, amount) {
    const deadline = Date.now() + 60000
    const tx = await this._exchange.functions.ethToTokenSwapInput(amount.toString(), deadline, {value, gasLimit: '80000'})
    console.log({tx});
    await tx.wait()
    console.log(`Successful Swap: https://ropsten.etherscan.io/tx/${tx.hash}`)
  }
}
