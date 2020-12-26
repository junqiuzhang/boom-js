const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = env => {
  const isProduction = env === 'production';
  const entry = isProduction ? './src/index.ts' : './example/index.ts';
  const outputDir = isProduction ? 'dist' : 'lib';
  const outputFile = isProduction ? 'boom.min.js' : 'index.js';
  const libraryTarget = isProduction ? 'var' : 'umd';
  const mode = isProduction ? 'production' : 'development';
  const plugins = isProduction
    ? [
        new webpack.SourceMapDevToolPlugin({
          filename: 'boom.min.js.map'
        })
      ]
    : [new HtmlWebpackPlugin()];
  return {
    entry,
    output: {
      filename: outputFile,
      path: path.resolve(__dirname, outputDir),
      library: 'boomJS',
      libraryExport: 'default',
      libraryTarget
    },
    devServer: {
      host: '0.0.0.0',
      port: 9000
    },
    mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins,
    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [new TerserWebpackPlugin()] : []
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  };
};
