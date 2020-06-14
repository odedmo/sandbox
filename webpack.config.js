const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'sandbox'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ root: path.join(__dirname, 'dist') })
  ],
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/, 
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  watch: true,
  mode: 'development',
  devServer: {
    contentBase: './src',
    watchContentBase: true
  },
};