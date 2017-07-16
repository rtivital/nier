const CurryN = require('../_internal/curryN/curryN');

function curryN(length, fn) {
  return CurryN(length, [], fn);
}

module.exports = CurryN(2, [], curryN);
