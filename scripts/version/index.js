/* eslint-disable no-console */

const fs = require('fs-extra');
const chalk = require('chalk');
const N = require('../../src');

fs
  .readFile('./package.json')
  .then(file => file.toString('utf8'))
  .then(JSON.parse)
  .then(({ version }) => {
    if (version === N.version) {
      console.log(`
        ${chalk.green.bold`Version check: ✔ passed`}
        Current version: ${chalk.blue(version)}
      `);
      process.exit(0);
    } else {
      console.log(`
        ${chalk.red.bold`Version check: ✗ failed`}
        package.json: ${chalk.blue(version)}
        index export: ${chalk.blue(N.version)}
      `);
      process.exit(1);
    }
  });
