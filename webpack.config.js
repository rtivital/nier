const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    }],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
