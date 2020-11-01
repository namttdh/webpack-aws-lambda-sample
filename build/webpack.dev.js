const base = require('./webpack.base.conf');
const nodeExternals = require('webpack-node-externals');

base.mode = 'development';
base.externals.push(nodeExternals());
base.output.filename = 'bundle.dev.js'
base.devtool = 'source-map';
base.stats = 'none';

module.exports = base;
