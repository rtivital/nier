const fs = require('fs');
const dox = require('dox');

fs.readFile('./src/append/append.js', (err, file) => {
  const result = dox.parseComments(file.toString('utf8'));
  console.log(JSON.stringify(result));
});
