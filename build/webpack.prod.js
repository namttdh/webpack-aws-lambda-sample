const base = require('./webpack.base.conf');
const webpack = require('webpack');
const resolve = require('path').resolve
const path = require('path');

base.mode = 'production';
// base.entry = path.resolve('src/index.lambda.ts');

base.plugins.push(new webpack.ContextReplacementPlugin(
    /express\/lib/,
    resolve('node_modules'),
    {
        'ejs': 'ejs'
    }
));

module.exports = base;
