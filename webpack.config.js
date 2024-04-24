const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Product Tracker',
      template: 'src/index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtractPlugin(),
    new NodePolyfillPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3500,
    hot: true,
    historyApiFallback: true,
    allowedHosts: [
      'mruane02'
    ]
  },
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    },
    alias: {
      'dt-bootstrap': path.resolve(
        __dirname,
        './node_modules/datatables.net-bs5'
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};