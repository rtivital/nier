const fs = require('fs-extra');
const N = require('../../src');

const INTERNAL_RESOURCES = [
  '_internal',
  'index.js',
];

const removeInternalResources = N.without(INTERNAL_RESOURCES);

module.exports = function getSrcContent() {
  return fs.readdir('./src').then(removeInternalResources);
};
