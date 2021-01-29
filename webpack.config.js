module.exports = {
  mode: 'development',  //production(发布)，development(开发)
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  }
};