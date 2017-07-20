const curry = require('../curry/curry');
const curryN = require('../curryN/curryN');

// module.exports = _curry1(function addIndex(fn) {
//   return curryN(fn.length, function() {
//     var idx = 0;
//     var origFn = arguments[0];
//     var list = arguments[arguments.length - 1];
//     var args = Array.prototype.slice.call(arguments, 0);
//     args[0] = function() {
//       var result = origFn.apply(this, _concat(arguments, [idx, list]));
//       idx += 1;
//       return result;
//     };
//     return fn.apply(this, args);
//   });
// });

function withIndex(fn) {
  return curryN(fn.length, (...args) => {
    let index = 0;
    const callback = args[0];
    const array = args[args.length - 1];

    const withIndexFn = (...withIndexFnArgs) => {
      const result = callback(...withIndexFnArgs, index, array);
      index += 1;
      return result;
    };

    const finalArgs = [withIndexFn, ...args.slice(1)];

    return fn(...finalArgs);
  });
}

module.exports = curry(withIndex);
