const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

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
        __dirname: false,
        __filename: false,
    },
    externals: [ nodeExternals() ],
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    ecma: 6,
                    beautify: false,
                    compress: true,
                    comments: false,
                    minify: true,
                    mangle: true,
                    toplevel: false,
                    keep_classnames: false,
                    keep_fnames: false,
                    output: {
                        comments: false
                    }
                }
            }),
        ]
    }
}
