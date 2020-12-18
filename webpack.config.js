const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};