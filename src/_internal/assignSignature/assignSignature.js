const SIGNATURES = require('../signatures');

function assignSignature(signature, value, object) {
  Object.defineProperty(object, SIGNATURES[signature], {
    value,
    configurable: false,
    enumerable: false,
    writable: false,
  });

  return object;
}

module.exports = assignSignature;
