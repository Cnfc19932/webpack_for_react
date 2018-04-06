var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: ['whatwg-fetch', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }, 
  
  devServer: {
    contentBase: '/src/app/public'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Front-End'
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJSPlugin()
      ],
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.js(x)$/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;