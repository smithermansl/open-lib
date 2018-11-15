var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/src/index.js',
    mode: 'development',
    output: {
        path: __dirname, 
        filename: './client/public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};