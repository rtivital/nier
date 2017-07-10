/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs-extra');
const dox = require('dox');
const format = require('./format');

fs
  .readFile('./src/append/append.js')
  .then((file) => {
    const result = dox.parseComments(file.toString('utf8'));
    console.log(JSON.stringify(format(result[0])));
  });
