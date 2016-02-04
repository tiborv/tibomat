/* eslint-disable */
const path = require('path');
module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!postcss-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  entry: {
    app: './client/app/app.js',
    vendor: './client/vendor'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  postcss: function(webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-simple-vars'),
      require('postcss-nested')
    ];
  }
};
