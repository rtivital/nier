const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './src/index'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'N',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [new webpack.optimize.UglifyJsPlugin()],
};
