/* eslint-disable no-console */

const fs = require('fs-extra');
const dox = require('dox');
const chalk = require('chalk');
const argv = require('yargs').argv;
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');
const formatDocItem = require('./formatDocItem');

const settings = N.merge({ output: './public', fileName: 'docs.json' }, argv);

const readSrcFiles = N.map(file => fs.readFile(`./src/${file}/${file}.js`));
const formatDocs = N.pipe(
  N.map(file => dox.parseComments(file.toString('utf8'))),
  N.unnest,
  N.map(formatDocItem),
  docs => ({ version: N.version, docs })
);

fs
  .ensureDir(settings.output)
  .then(() => getSrcContent())
  .then(files => Promise.all(readSrcFiles(files)))
  .then(files => fs.writeJson(`${settings.output}/${settings.fileName}`, formatDocs(files)))
  .then(() => {
    console.log(chalk.green.bold`✔ Docs generated\n`);
    process.exit(0);
  })
  .catch((err) => {
    console.log(`${chalk.red.bold('Docs generation error:')} ${err.message}\n`);
    process.exit(1);
  });
