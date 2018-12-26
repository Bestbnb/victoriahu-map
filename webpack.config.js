const path = require('path');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  module: {
    rules: [
      {
      test: [/\.jsx$/], // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: {
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
        }
      }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
          include: /flexboxgrid/
      }
  ]
  }
};