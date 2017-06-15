const curry = require('../curry/curry');

module.exports = curry((element, array) => [...array, element], 2);
