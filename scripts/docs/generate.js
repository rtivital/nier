/* eslint-disable no-console */

const fs = require('fs-extra');
const dox = require('dox');
const Highlight = require('highlight.js');
const chalk = require('chalk');
const argv = require('yargs').argv;
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');

const settings = N.merge({ output: './public', fileName: 'docs.json' }, argv);

function extractTagContent(tag) {
  return N.pipe(
    N.path('tags'),
    N.find(N.whereEq({ type: tag })),
    N.path('string')
  );
}

function extractExamples(docItem) {
  const examples = extractTagContent('example')(docItem);
  return Highlight.highlight('js', examples).value;
}

function format(docItem) {
  return {
    name: N.path(['ctx', 'name'], docItem),
    since: extractTagContent('since')(docItem),
    see: extractTagContent('see')(docItem),
    alias: extractTagContent('alias')(docItem),
    category: extractTagContent('category')(docItem),
    examples: extractExamples(docItem),
    description: N.path(['description', 'full'], docItem).replace(/<(?:.|\n)*?>/gm, ''),
    params: N.pipe(
      N.path('tags'),
      N.filter(N.whereEq({ type: 'param' })),
      N.map(N.pick(['name', 'description', 'typesDescription']))
    )(docItem),
  };
}

const readSrcFiles = N.map(file => fs.readFile(`./src/${file}/${file}.js`));
const formatDocs = N.pipe(
  N.map(file => dox.parseComments(file.toString('utf8'))),
  N.unnest,
  N.map(format),
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
    console.log(err);
    console.log(`${chalk.red.bold('Docs generation error:')} ${err}\n`);
    process.exit(1);
  });
