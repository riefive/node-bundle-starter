const path = require('path');

module.exports = {
    entry: './src/app.js',
    target: 'node',
    devtool: 'eval-source-map',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
}
