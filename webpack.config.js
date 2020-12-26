const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
module.exports = (env) => {
  const isProduction = env === 'production';
  const isDevelopment = env === 'development';
  const entry = isDevelopment ? './example/index.ts' : './src/index.ts';
  const outputDir = isProduction ? 'dist' : 'lib';
  const outputFile = isProduction ? 'index.min.js' : 'index.js';
  const libraryTarget = isProduction ? 'var' : 'umd';
  const mode = isProduction ? 'production' : 'development';
  const plugins = isDevelopment ? [new HtmlWebpackPlugin()] : []; //isProduction ? [new UglifyjsWebpackPlugin()] :
  return {
    entry,
    output: {
      filename: outputFile,
      path: path.resolve(__dirname, outputDir),
      library: 'boomJS',
      libraryExport: 'default',
      libraryTarget,
    },
    devServer: {
      host: '0.0.0.0',
      port: 9000,
    },
    mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(glsl|vs|fs)$/,
          use: 'ts-shader-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins,
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
  };
}