const fs = require('fs-extra');
const dox = require('dox');
const getSrcContent = require('../utils/getSrcContent');
const N = require('../../src');

const readSrcFiles = N.map(file => fs.readFile(`./src/${file}/${file}.js`));
const parseComments = N.map(file => dox.parseComments(file.toString('utf8')));

getSrcContent()
  .then(files => Promise.all(readSrcFiles(files)))
  .then(files => fs.writeJson('./docs/data.json', parseComments(files)))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// fs
//   .readFile('./src/append/append.js')
//   .then((file) => {
//     const result = dox.parseComments(file.toString('utf8'));
//     console.log(JSON.stringify(format(result[0])));
//   });
