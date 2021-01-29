var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
  mode: 'development',  //production(发布)，development(开发)
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: '首页',
    template: 'src/assets/index.html'
  })]
};
