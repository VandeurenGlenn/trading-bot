#!/usr/bin/env node
'use strict';

var commander = require('commander');

var version = "0.3.0";

const program = new commander.Command();

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

program.opts();
