const curry = require('../curry/curry');

module.exports = curry((element, array) => array.concat([element]), 2);
