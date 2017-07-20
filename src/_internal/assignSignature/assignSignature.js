const SIGNATURES = require('../signatures');

module.exports = function assignSignature(signature, value, object) {
  Object.defineProperty(object, SIGNATURES[signature], {
    value,
    configurable: false,
    enumerable: false,
    writable: false,
  });

  return object;
};
