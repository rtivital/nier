const SIGNATURES = require('../signatures');

function isPlaceholder(value) {
  return value != null && !!value[SIGNATURES.placeholder];
}

module.exports = isPlaceholder;
