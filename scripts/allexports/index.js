/* eslint-disable no-console */

const chalk = require('chalk');
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');

const exportedModules = N.keys(N);
const title = chalk.blue.bold('allexports:');

getSrcContent().then((modules) => {
  const missingModules = N.filter(module => !N.includes(module, exportedModules), modules);

  if (missingModules.length === 0) {
    console.log(
      `${title} No missing modules`
    );

    process.exit(0);
  }

  const messages = N.map(
    module => `${title} Missing module: ${chalk.red.bold(module)}`,
    missingModules
  );

  console.log(messages.join('\n'));
  process.exit(1);
});
