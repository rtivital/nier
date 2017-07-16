const _curryN = require('../_internal/curryN/curryN');

function curryN(length, fn) {
  return _curryN(length, [], fn);
}

module.exports = _curryN(2, [], curryN);
