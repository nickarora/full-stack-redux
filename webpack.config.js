const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    target: 'web',

    entry: [
        './client'
    ],

    output: {
        filename: './bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
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

    ],

    postcss: [autoprefixer],

    resolve: {
        extensions: ['', '.jsx', '.js', '.webpack.js', '.css' ]
    }
}