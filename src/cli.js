import { Command } from 'commander'
import { version } from './../package.json'
const program = new Command();

program
  .version(version)
  .option('-s, --start', 'start bot')
  .option('-i, --init', 'init new network')
  .option('-c, --config <path>, config.json path')
  .option('-ci, --chainId <number>')
  .option('-n, --network <string>')
  .option('-a, --address <string>')
  .option('-p, --privateKey <string>')
  .option('-ea --etherAmount <string>')
  .option('-ta --tokenAmount <string>')
  .parse(process.argv);

const options = program.opts();
