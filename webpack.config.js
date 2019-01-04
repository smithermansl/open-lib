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
                    presets: ['@babel/react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};