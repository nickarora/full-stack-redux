const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    target: 'web',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/client'
    ],

    output: {
        path: path.join(__dirname, './dist'),
        filename: './bundle.js',
        publicPath: 'http://localhost:8080/'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: ['style', 'css', 'postcss', 'sass'],
            include: __dirname
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.NoErrorsPlugin()
    ],

    postcss: [autoprefixer],

    resolve: {
        extensions: ['', '.jsx', '.js', '.webpack.js', '.css' ]
    }
}