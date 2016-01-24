const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    target: 'web',

    entry: [
        './src/client'
    ],

    output: {
        filename: './bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/static/'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: ['style', 'css', 'postcss', 'sass'],
            include: __dirname
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    postcss: [autoprefixer],

    resolve: {
        extensions: ['', '.jsx', '.js', '.webpack.js', '.css' ]
    }
}