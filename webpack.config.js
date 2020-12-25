const path = require('path');
module.exports = (env) => {
  const isProduction = env === 'production';
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const entry = isProduction ? './src/index.ts' : './example/index.ts';
  const mode = isProduction ? 'production' : 'development';
  const plugins = isProduction ? [] : [new HtmlWebpackPlugin()];
  return {
    entry,
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'lib'),
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