/* eslint-disable no-console */

const chalk = require('chalk');
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');

const exportedModules = N.keys(N);
const getMissingModules = N.reject(N.flip(N.includes)(exportedModules));
const getMissingMessages = N.pipe(
  N.map(module => `Exports test: ✗ Missing module: ${chalk.red.bold(module)}`),
  N.join('\n')
);

getSrcContent().then((modules) => {
  const missingModules = getMissingModules(modules);

  if (missingModules.length === 0) {
    console.log(`
      Exports test: ${chalk.green`✔ No missing modules!`}
      Total modules: ${chalk.blue.bold(modules.length)}
    `);

    process.exit(0);
  }

  console.log(getMissingMessages(missingModules));
  process.exit(1);
});
