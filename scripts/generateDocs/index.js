/* eslint-disable no-console */

const fs = require('fs-extra');
const dox = require('dox');
const chalk = require('chalk');
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');
const format = require('./format');

const readSrcFiles = N.map(file => fs.readFile(`./src/${file}/${file}.js`));
const parseComments = N.pipe(
  N.map(file => dox.parseComments(file.toString('utf8'))),
  N.unnest,
  N.map(format)
);

fs
  .ensureDir('./public')
  .then(() => getSrcContent())
  .then(files => Promise.all(readSrcFiles(files)))
  .then(files => fs.writeJson('./public/docs.json', parseComments(files)))
  .then(() => console.log(chalk.green.bold`✔ Docs generated\n`))
  .catch((err) => {
    console.log(`${chalk.red.bold('docs generation error:')} ${err.message}\n`);
    process.exit(1);
  });
