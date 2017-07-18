/* eslint-disable no-console */

const chalk = require('chalk');
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');

const exportedModules = N.keys(N);
const title = chalk.blue.bold('allexports:');
const getMissingMessages = N.pipe(
  N.map(module => `${title} Missing module: ${chalk.red.bold(module)}`),
  N.join('\n')
);

getSrcContent().then((modules) => {
  const missingModules = N.filter(module => !N.includes(module, exportedModules), modules);

  if (missingModules.length === 0) {
    console.log(
      `${title} No missing modules`
    );

    process.exit(0);
  }

  console.log(getMissingMessages(missingModules));
  process.exit(1);
});
