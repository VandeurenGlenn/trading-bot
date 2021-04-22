import ethers from 'ethers'
import Exchange from './exchange'

export default class TradingBot {
  constructor() {
    return this._init()
  }

  async _init() {
    const importee = await import('./config.js')
    const { RPC_URL, NETWORK, PRIVATE_KEY } = await importee.default()
    this.provider = new ethers.providers.EtherscanProvider('ropsten', 'SHIR9KEV3GEVQ73Y851XMFWVH4P38Z4C8Y')
    // this.provider = new ethers.providers.JsonRpcProvider(RPC_URL, NETWORK)

    this.signer = new ethers.Wallet(PRIVATE_KEY, this.provider);
    this.exchange = new Exchange(this.signer)

    return this
  }

  get parseUnits() {
    return ethers.utils.parseUnits
  }

  get formatUnits() {
    return ethers.utils.formatUnits
  }

  async price(value, token, decimals = 18) {
    const amount = await this.exchange.contract.callStatic.getEthToTokenInputPrice(value)
    return this.formatUnits(amount, decimals)
  }

  ethToToken(value, minTokenAmount) {
    return this.exchange.ethToToken(value, minTokenAmount)
  }
}
