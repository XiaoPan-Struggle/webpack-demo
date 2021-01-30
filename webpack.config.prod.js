const base = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  ...base,
  mode: 'production',  //production(发布)，development(开发)
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    })
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader']
      }
    ]
  }
};
