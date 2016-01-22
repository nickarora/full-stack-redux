const path = require('path');
const autoprefixer = require('autoprefixer');

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

    ],

    postcss: [autoprefixer],

    resolve: {
        extensions: ['', '.jsx', '.js', '.webpack.js', '.css' ]
    }
}