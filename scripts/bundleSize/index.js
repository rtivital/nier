/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs-extra');

fs.stat('./dist/index.js').then((file) => {
  console.log(`${file.size / 1000}KB`);
});
