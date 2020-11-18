const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '/dist'),
    // path: path.join(__dirname, '/dist'),
    filename: 'index_bungle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
  })],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
  }
};