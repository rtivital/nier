const chalk = require('chalk');
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');

const exportedModules = N.keys(N);

getSrcContent().then((modules) => {
  N.map((module) => {
    if (!N.includes(module, exportedModules)) {
      console.log(`Missing module export ${chalk.red.bold(module)}`);
    }
  }, modules);
});
