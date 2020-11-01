const path = require('path');
const helper = require('./helper');

module.exports = {
  target: 'node',
  entry: path.resolve('src/index.ts'),
  externals: [],
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: helper.resolveTsconfigPathsToAlias(path.resolve('tsconfig.json'), path.resolve('')),
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
};
