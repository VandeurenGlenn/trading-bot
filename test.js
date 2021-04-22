const TrandingBot = require('./dist/index');

(async () => {
  const tradingBot = await new TrandingBot()
  const price = await tradingBot.price(tradingBot.parseUnits('1', 18), 'DAI')
  console.log(`${price} DAI for 1 ETH`)
  await tradingBot.ethToToken(tradingBot.parseUnits('1', 18), tradingBot.parseUnits(price, 18))
})()
