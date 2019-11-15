var path = require('path');
var SRC_DIR = path.resolve(__dirname, './client/src');
var DIST_DIR = path.resolve(__dirname, './client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js[x]?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
