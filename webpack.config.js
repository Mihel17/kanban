const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './js/script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'core')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'css'), to: path.resolve(__dirname, 'dist', 'css') },
        { from: path.resolve(__dirname, 'src', 'fonts'), to: path.resolve(__dirname, 'dist', 'fonts') },
        { from: path.resolve(__dirname, 'src', 'img'), to: path.resolve(__dirname, 'dist', 'img') },
      ],
    }),
  ]
}